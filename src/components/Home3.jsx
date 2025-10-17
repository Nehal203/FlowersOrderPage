import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { menuData } from "./items";
const Home3 = () => {
    
    const [activeTab, setActiveTab] = useState("Roses");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 16;

    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [showCheckoutPopup, setShowCheckoutPopup] = useState(false);
    const [showOTPVerification, setShowOTPVerification] = useState(false);
    const [showCustomerInfo, setShowCustomerInfo] = useState(false);
    const [showOrderSuccess, setShowOrderSuccess] = useState(false);
    const [expandedNames, setExpandedNames] = useState(new Set());
    const [searchQuery, setSearchQuery] = useState("");

    const [customerData, setCustomerData] = useState({
        name: "",
        phone: "",
        email: "",
        otp: "",
        address: "",
        city: "",
        pincode: ""
    });

    const [generatedOTP, setGeneratedOTP] = useState("");
    const confettiCanvasRef = useRef(null);

    const addToCart = (item) => {
        const exist = cart.find((x) => x.id === item.id);
        if (exist) {
            setCart(
                cart.map((x) =>
                    x.id === item.id ? { ...x, qty: x.qty + 1 } : x
                )
            );
        } else {
            setCart([...cart, { ...item, qty: 1 }]);
        }
    };

    const updateQty = (item, type) => {
        setCart(
            cart.map((x) =>
                x.id === item.id
                    ? {
                        ...x,
                        qty: type === "inc" ? x.qty + 1 : x.qty > 1 ? x.qty - 1 : 1,
                    }
                    : x
            )
        );
    };

    const removeFromCart = (item) => {
        setCart(cart.filter((x) => x.id !== item.id));
    };

    const getQty = (id) => {
        const item = cart.find((x) => x.id === id);
        return item ? item.qty : 0;
    };

    const incQty = (item) => {
        const exist = cart.find((x) => x.id === item.id);
        if (exist) {
            updateQty(item, "inc");
        } else {
            addToCart(item);
        }
    };

    const decQty = (item) => {
        const exist = cart.find((x) => x.id === item.id);
        if (exist) {
            if (exist.qty === 1) {
                removeFromCart(item);
            } else {
                updateQty(item, "dec");
            }
        }
    };

    const subtotal = cart.reduce((sum, x) => sum + x.price * x.qty, 0);

    const categories = [
        { key: "Roses", label: "Roses", icon: "🌹" },
        { key: "Lilies", label: "Lilies", icon: "🌸" },
        { key: "Orchids", label: "Orchids", icon: "🌺" },
        { key: "Gerbera", label: "Gerbera", icon: "🥪" },
        { key: "CarnationFLowers", label: "Carnation", icon: "🥤" },
        { key: "ChocolateBouquet", label: "Chocolate", icon: "🥤" },
    ];

    const variants = {
        initial: { opacity: 0, x: 40 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -40 },
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [activeTab, searchQuery]);

    const items = menuData[activeTab] || [];
    const filteredItems = searchQuery.trim()
        ? items.filter((i) => i.name.toLowerCase().includes(searchQuery.toLowerCase()))
        : items;
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage) || 1;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const pageItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);
    const activeLabel = (categories.find((c) => c.key === activeTab)?.label) || activeTab;

    const getPageList = () => {
        const pages = [];
        const max = totalPages;
        const curr = currentPage;
        const add = (v) => pages.push(v);
        if (max <= 7) {
            for (let i = 1; i <= max; i++) add(i);
        } else {
            add(1);
            if (curr > 3) add('...');
            const start = Math.max(2, curr - 1);
            const end = Math.min(max - 1, curr + 1);
            for (let i = start; i <= end; i++) add(i);
            if (curr < max - 2) add('...');
            add(max);
        }
        return pages;
    };

    const handleCheckout = () => {
        setShowCheckoutPopup(true);
    };

    const generateOTP = () => {
        const otp = Math.floor(1000 + Math.random() * 9000).toString();
        setGeneratedOTP(otp);
        setShowOTPVerification(true);
        setShowCheckoutPopup(false);

        alert(`OTP sent to ${customerData.phone}: ${otp}`);
    };

    const verifyOTP = () => {
        if (customerData.otp === generatedOTP) {
            setShowOTPVerification(false);
            setShowCustomerInfo(true);
        } else {
            alert("Invalid OTP. Please try again.");
        }
    };

    const handleCustomerInfoSubmit = () => {
        setShowCustomerInfo(false);
        setShowOrderSuccess(true);
    };

    const resetOrder = () => {
        setCart([]);
        setShowCart(false);
        setShowOrderSuccess(false);
        setCustomerData({
            name: "",
            phone: "",
            email: "",
            otp: "",
            address: "",
            city: "",
            pincode: ""
        });
    };

    const toggleNameExpand = (id) => {
        setExpandedNames((prev) => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    };

    useEffect(() => {
        if (!showOrderSuccess) return;
        const canvas = confettiCanvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const colors = ["#ff4d4f", "#40a9ff", "#36cfc9", "#fadb14", "#9254de", "#73d13d"]; 
        const particles = [];
        const count = Math.min(220, Math.floor((canvas.width * canvas.height) / 24000));
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: -20 - Math.random() * canvas.height * 0.5,
                r: 3 + Math.random() * 4,
                c: colors[Math.floor(Math.random() * colors.length)],
                vx: -2 + Math.random() * 4,
                vy: 2 + Math.random() * 3,
                a: Math.random() * Math.PI * 2,
                va: -0.1 + Math.random() * 0.2
            });
        }

        let rafId;
        let start;
        const duration = 3000;
        const animate = (ts) => {
            if (!start) start = ts;
            const elapsed = ts - start;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.a += p.va;
                if (p.y > canvas.height + 10) {
                    p.y = -10;
                    p.x = Math.random() * canvas.width;
                }
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.a);
                ctx.fillStyle = p.c;
                ctx.fillRect(-p.r, -p.r, p.r * 2, p.r * 2);
                ctx.restore();
            });
            if (elapsed < duration) {
                rafId = requestAnimationFrame(animate);
            }
        };
        rafId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener('resize', resize);
            ctx && ctx.clearRect(0, 0, canvas.width, canvas.height);
        };
    }, [showOrderSuccess]);

    return (
        <div className="bg-white text-white min-h-screen p-4">
            <div className="sticky top-0 z-50 bg-white pb-2">
                <div className="flex justify-between items-center mb-2">
                    <h1 className="text-lg font-bold text-black ">Have A Nice Day</h1>
                    <button
                        onClick={() => setShowCart(!showCart)}
                        className="bg-[#6a0572] px-3 py-2 rounded-full text-sm"
                    >
                        {showCart ? "Menu 🍽️" : `Cart 🛒 (${cart.length})`}
                    </button>
                </div>
                <div className="flex overflow-x-auto space-x-2 mb-2 scrollbar-hide">
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => setActiveTab(cat.key)}
                            className={`flex items-center space-x-1 px-4 py-2 rounded-xl text-sm ${activeTab === cat.key
                                ? "bg-[#6a0572] text-white"
                                : "bg-[#d3cfcf] text-black"
                                }`}
                        >
                            <span>{cat.icon}</span>
                            <span>{cat.label}</span>
                        </button>
                    ))}
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={`Search ${activeLabel}...`}
                        className="flex-1 bg-[#efefef] text-black rounded-md px-3 py-2"
                    />
                    <button
                        onClick={() => setCurrentPage(1)}
                        className="bg-[#6a0572] text-white px-4 py-2 rounded-md text-sm"
                    >
                        Search
                    </button>
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery("")}
                            className="bg-gray-300 text-black px-3 py-2 rounded-md text-sm"
                        >
                            Clear
                        </button>
                    )}
                </div>
            </div>

            {showOrderSuccess && (
                <div className="fixed inset-0 z-40 pointer-events-none">
                    <canvas ref={confettiCanvasRef} className="w-full h-full" />
                </div>
            )}

            <AnimatePresence mode="wait">
                {!showCart && !showCustomerInfo && !showOrderSuccess && (
                    <motion.div
                        key="menu"
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.4 }}
                    >

                        <motion.div
                            key={activeTab}
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 gap-3 md:grid-cols-2"
                        >
                            <h2 className="text-black mb-3 text-sm font-semibold uppercase col-span-1 md:col-span-2">
                                {activeLabel}
                            </h2>
                            {pageItems.length === 0 && (
                                <div className="col-span-1 md:col-span-2 text-center text-sm text-gray-600">
                                    No items found.
                                </div>
                            )}
                            {pageItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between bg-[#efefef] rounded-lg px-4 py-3 gap-3"
                                >
                                    <img className="w-20 h-20 object-cover rounded-md flex-shrink-0" src={item.img} alt={item.name} />
                                    <div className="flex-1 min-w-0">
                                        <h3
                                            className={`text-base text-black ${expandedNames.has(item.id) ? "whitespace-normal break-words" : "truncate"} cursor-pointer`}
                                            onClick={() => toggleNameExpand(item.id)}
                                            title={item.name}
                                        >
                                            {item.name}
                                        </h3>
                                        <p className="text-black text-sm">Rs {item.price}.00</p>
                                    </div>
                                    {getQty(item.id) === 0 ? (
                                        <button
                                            onClick={() => addToCart(item)}
                                            className="bg-[#6a0572] text-white px-4 py-1 rounded-md text-sm flex-shrink-0"
                                        >
                                            Add
                                        </button>
                                    ) : (
                                        <div className="flex items-center space-x-2">
                                            <button
                                                onClick={() => decQty(item)}
                                                className="bg-gray-700 px-2 rounded"
                                            >
                                                -
                                            </button>
                                            <span className="text-black">{getQty(item.id)}</span>
                                            <button
                                                onClick={() => incQty(item)}
                                                className="bg-gray-700 px-2 rounded"
                                            >
                                                +
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {totalPages > 1 && (
                                <div className="flex items-center justify-center space-x-2 pt-2 col-span-1 md:col-span-2">
                                    <button
                                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                        disabled={currentPage === 1}
                                        className={`px-3 py-1 rounded text-sm ${currentPage === 1 ? "bg-gray-300 text-gray-500" : "bg-[#d3cfcf] text-black"}`}
                                        aria-label="Previous page"
                                    >
                                        ‹
                                    </button>
                                    {getPageList().map((p, idx) => (
                                        typeof p === 'number' ? (
                                            <button
                                                key={p}
                                                onClick={() => setCurrentPage(p)}
                                                className={`px-3 py-1 rounded text-sm ${p === currentPage ? "bg-[#6a0572] text-white" : "bg-[#d3cfcf] text-black"}`}
                                            >
                                                {p}
                                            </button>
                                        ) : (
                                            <span key={`el-${idx}`} className="px-2 text-black">…</span>
                                        )
                                    ))}
                                    <button
                                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                        disabled={currentPage === totalPages}
                                        className={`px-3 py-1 rounded text-sm ${currentPage === totalPages ? "bg-gray-300 text-gray-500" : "bg-[#d3cfcf] text-black"}`}
                                        aria-label="Next page"
                                    >
                                        ›
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}

                {showCart && !showCustomerInfo && !showOrderSuccess && (
                    <motion.div
                        key="cart"
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.4 }}
                        className="bg-[#efefef] rounded-lg p-4"
                    >
                        <h2 className="text-lg font-semibold text-red-500 mb-3">
                            Your Order Summary
                        </h2>

                        {cart.length === 0 ? (
                            <p className="text-black text-sm">Your cart is empty.</p>
                        ) : (
                            <>
                                {cart.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex justify-between items-center mb-3 border-b border-gray-700 pb-2"
                                    >
                                        <div>
                                            <h3 className="text-base text-black">{item.name}</h3>
                                            <p className="text-gray-600 text-sm">
                                                Rs {item.price * item.qty}.00
                                            </p>
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            <button
                                                onClick={() => updateQty(item, "dec")}
                                                className="bg-gray-700 px-2 rounded"
                                            >
                                                -
                                            </button>
                                            <span className="text-black">{item.qty}</span>
                                            <button
                                                onClick={() => updateQty(item, "inc")}
                                                className="bg-gray-700 px-2 rounded"
                                            >
                                                +
                                            </button>
                                            <button
                                                onClick={() => removeFromCart(item)}
                                                className="text-red-400 text-xl"
                                            >
                                                🗑
                                            </button>
                                        </div>
                                    </div>
                                ))}

                                <div className="text-right mt-4">
                                    <p className="text-red-400 font-semibold">
                                        Subtotal : Rs {subtotal}.00
                                    </p>
                                    <p className="text-gray-500 text-sm mb-3">
                                        Extra charges may apply
                                    </p>
                                    <button
                                        onClick={handleCheckout}
                                        className="w-full bg-[#6a0572] px-5 py-2 rounded-md font-medium"
                                    >
                                        Checkout
                                    </button>
                                </div>
                            </>
                        )}
                    </motion.div>
                )}

                {showCheckoutPopup && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-[#efefef] rounded-lg p-6 w-full max-w-md"
                        >
                            <h3 className="text-lg font-semibold mb-4 text-black">Enter Your Details</h3>
                            <div className="space-y-3">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    value={customerData.name}
                                    onChange={(e) => setCustomerData({ ...customerData, name: e.target.value })}
                                    className="w-full bg-[#d3cfcf] rounded-lg px-4 py-2 text-black"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={customerData.email}
                                    onChange={(e) => setCustomerData({ ...customerData, email: e.target.value })}
                                    className="w-full bg-[#d3cfcf] rounded-lg px-4 py-2 text-black"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    value={customerData.phone}
                                    onChange={(e) => setCustomerData({ ...customerData, phone: e.target.value })}
                                    className="w-full bg-[#d3cfcf] rounded-lg px-4 py-2 text-black"
                                />
                            </div>
                            <div className="flex space-x-3 mt-6">
                                <button
                                    onClick={() => setShowCheckoutPopup(false)}
                                    className="flex-1 bg-gray-600 px-4 py-2 rounded-lg"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={generateOTP}
                                    disabled={!customerData.name || !customerData.phone}
                                    className="flex-1 bg-[#6a0572] px-4 py-2 rounded-lg disabled:opacity-50"
                                >
                                    Send OTP
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}

                {showOTPVerification && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-[#efefef] rounded-lg p-6 w-full max-w-md"
                        >
                            <h3 className="text-lg font-semibold mb-4 text-black">Verify OTP</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                OTP sent to {customerData.phone}
                            </p>
                            <input
                                type="text"
                                placeholder="Enter OTP"
                                value={customerData.otp}
                                onChange={(e) => setCustomerData({ ...customerData, otp: e.target.value })}
                                className="w-full bg-[#d3cfcf] rounded-lg px-4 py-2 text-black mb-4"
                            />
                            <div className="flex space-x-3">
                                <button
                                    onClick={() => setShowOTPVerification(false)}
                                    className="flex-1 bg-gray-600 px-4 py-2 rounded-lg"
                                >
                                    Back
                                </button>
                                <button
                                    onClick={verifyOTP}
                                    className="flex-1 bg-[#6a0572] px-4 py-2 rounded-lg"
                                >
                                    Verify OTP
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}

                {showCustomerInfo && (
                    <motion.div
                        key="customer-info"
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.4 }}
                        className="bg-[#efefef] rounded-lg p-4"
                    >
                        <h2 className="text-lg font-semibold text-red-500 mb-4">
                            Customer Information
                        </h2>

                        <div className="mb-6">
                            <h3 className="font-semibold mb-3 text-black">Order Summary</h3>
                            {cart.map((item) => (
                                <div key={item.id} className="flex justify-between mb-2 text-black">
                                    <span>{item.name} x {item.qty}</span>
                                    <span>Rs {item.price * item.qty}.00</span>
                                </div>
                            ))}
                            <div className="border-t border-gray-700 pt-2 mt-2">
                                <div className="flex justify-between font-semibold text-black">
                                    <span>Total Amount:</span>
                                    <span className="text-red-400">Rs {subtotal}.00</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h3 className="font-semibold text-black">Your Details</h3>
                            <input
                                type="text"
                                placeholder="Full Address"
                                value={customerData.address}
                                onChange={(e) => setCustomerData({ ...customerData, address: e.target.value })}
                                className="w-full bg-[#d3cfcf] rounded-lg px-4 py-2 text-black"
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <input
                                    type="text"
                                    placeholder="City"
                                    value={customerData.city}
                                    onChange={(e) => setCustomerData({ ...customerData, city: e.target.value })}
                                    className="w-full min-w-0 bg-[#d3cfcf] rounded-lg px-3 py-2 text-black"
                                />
                                <input
                                    type="text"
                                    placeholder="Pincode"
                                    value={customerData.pincode}
                                    onChange={(e) => setCustomerData({ ...customerData, pincode: e.target.value })}
                                    className="w-full min-w-0 bg-[#d3cfcf] rounded-lg px-3 py-2 text-black"
                                />
                            </div>
                        </div>

                        <button
                            onClick={handleCustomerInfoSubmit}
                            disabled={!customerData.address || !customerData.city || !customerData.pincode}
                            className="w-full bg-[#6a0572] px-4 py-3 rounded-lg font-semibold mt-6 disabled:opacity-50"
                        >
                            Continue to Checkout
                        </button>
                    </motion.div>
                )}

                {showOrderSuccess && (
                    <motion.div
                        key="order-success"
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.4 }}
                        className="bg-[#efefef] rounded-lg p-6 text-center"
                    >
                        <div className="relative z-50 text-6xl mb-4">🎉</div>
                        <h2 className="text-2xl font-semibold text-green-400 mb-4">
                            Order Placed Successfully!
                        </h2>

                        <div className="bg-[#d3cfcf] rounded-lg p-4 mb-6">
                            <h3 className="font-semibold mb-3 text-black">Order Confirmed</h3>
                            <div className="space-y-2 text-sm text-black">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex justify-between">
                                        <span>{item.name} x {item.qty}</span>
                                        <span>Rs {item.price * item.qty}.00</span>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-gray-700 pt-3 mt-3">
                                <div className="flex justify-between text-black font-semibold text-lg">
                                    <span>Total Amount:</span>
                                    <span className="text-red-400">Rs {subtotal}.00</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-black text-sm mb-6">
                            <p>Thank you for your order, {customerData.name}!</p>
                            <p>Your order will be delivered to {customerData.address}</p>
                        </div>

                        <button
                            onClick={resetOrder}
                            className="bg-[#6a0572] px-6 py-3 rounded-lg font-semibold"
                        >
                            Place New Order
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Home3;