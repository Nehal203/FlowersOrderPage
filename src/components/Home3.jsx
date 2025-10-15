import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Home3 = () => {
    const menuData = {
        Tea: [
            { id: 1, name: "Good Morning Red Rose", price: 49, img: '/images/1.GoodMorningRedRose.png' },
            { id: 2, name: "Jumilia Rose Bouquet", price: 59, img: '/images/2.JumiliaRoseBouquet.png' },
            { id: 3, name: "Lily & Rose Mixed Flower Bouquet", price: 59, img: '/images/3.Lily&RoseMixedFlowerBouquet.jpg' },
            { id: 4, name: "4.Pink Shaded White Roses in Glass Vase", price: 149, img: '/images/4.PinkShadedWhiteRosesinGlassVase.jpg' },
            { id: 5, name: "Red Rose & White Daisy Flower Box", price: 59, img: '/images/5.RedRose&WhiteDaisyFlowerBox.png' },
            { id: 6, name: "Red Rose Bouquet", price: 89, img: '/images/6.RedRoseBouquet.png' },
            { id: 7, name: "Red Rose Flower Bag", price: 99, img: '/images/7.RedRoseFlowerBag.jpeg' },
            { id: 8, name: "Red Roses 6 Inch Teddy Bear with Handle Basket", price: 99, img: '/images/8.RedRoses6InchTeddyBearwithHandleBasket.png' },
            { id: 9, name: "Red Roses with Floral Bag", price: 99, img: '/images/9.RedRoseswithFloralBag.png' },
            { id: 10, name: "Red Roses with Forest Paper Packing Bunch", price: 99, img: '/images/10.RedRoseswithForestPaperPackingBunch.jpeg' },
            { id: 11, name: "Red Roses with Glass Vase", price: 99, img: '/images/11.RedRoseswithGlassVase.png' },
            { id: 12, name: "Red Roses with Yellow Daisy Paper Packing", price: 99, img: '/images/12.RedRoseswithYellowDaisyPaperPacking.jpeg' },
            { id: 13, name: "Republic Day Flowers and Cake", price: 99, img: '/images/13.RepublicDayFlowersandCake.jpg' },
            { id: 14, name: "Republic Day Special Flowers Arrangement", price: 99, img: '/images/14.RepublicDaySpecialFlowersArrangement.jpeg' },
            { id: 15, name: "Valentine’s Special Single Rose Flower", price: 99, img: '/images/15.Valentine’sSpecialSingleRoseFlower.png' },
            { id: 16, name: "White Roses in Glass Vase", price: 99, img: '/images/16.WhiteRosesinGlassVase.jpg' },
            { id: 17, name: "White Rose Bouquet", price: 99, img: '/images/17.WhiteRoseBouquet.png' },
            { id: 18, name: "Pink Roses Bouquet", price: 99, img: '/images/18.PinkRosesBouquet.jpg' },
            { id: 19, name: "Red Roses Vase", price: 99, img: '/images/19.RedRosesVase.png' },
            { id: 20, name: "Best Yellow Roses In Udaipur", price: 99, img: '/images/20.BestYellowRosesInUdaipur.png' },
            { id: 21, name: "Mixed Roses Combo Bouquet", price: 99, img: '/images/21.MixedRosesComboBouquet.png' },
            { id: 22, name: "Mix Rose With Cake Combo", price: 99, img: '/images/22.MixRoseWithCakeCombo.jpg' },
            { id: 23, name: "Pink Rose Bouquet With Cake", price: 99, img: '/images/23.PinkRoseBouquetWithCake.jpg' },
            { id: 24, name: "Rose Bouquet And Cake Combo", price: 99, img: '/images/24.RoseBouquetAndCakeCombo.jpg' },
            { id: 25, name: "Yellow And Red Rose Bouquet With Cake", price: 99, img: '/images/25.YellowAndRedRoseBouquetWithCake.jpg' },
            { id: 26, name: "White Roses With Heart Shape Cake", price: 99, img: '/images/26.WhiteRosesWithHeartShapeCake.png' },
            { id: 27, name: "Elegant Rose Bouquet", price: 99, img: '/images/27.ElegantRoseBouquet.jpg' },
            { id: 28, name: "Best Florist Roses Bouquet", price: 99, img: '/images/28.BestFloristRosesBouquet.png' },
            { id: 29, name: "Bunch Of Red Roses Bouquet", price: 99, img: '/images/29.BunchOfRedRosesBouquet.png' },
            { id: 30, name: "Bunch of Mix Flowers", price: 99, img: '/images/30.BunchofMixFlowers.png' },
            { id: 31, name: "Mixed Colored Roses Bouquet", price: 99, img: '/images/31.MixedColoredRosesBouquet.png' },
            { id: 32, name: "Mixed Roses With Chocolate Cake", price: 99, img: '/images/32.MixedRosesWithChocolateCake.png' },
            { id: 33, name: "rose bouquet with cake combo", price: 99, img: '/images/33.rosebouquetwithcakecombo.png' },
            { id: 34, name: "Red Roses With Glass Vase", price: 99, img: '/images/34.RedRosesWithGlassVase.png' },
            { id: 35, name: "Bunch Of Red Roses", price: 99, img: '/images/35.BunchOfRedRoses.png' },
            { id: 36, name: "20 Red Roses Bouquet", price: 99, img: '/images/36.20RedRosesBouquet.png' },
            { id: 37, name: "Red Roses With Basket", price: 99, img: '/images/37.RedRosesWithBasket.png' },
            { id: 38, name: "Pink Roses In Glass Vase", price: 99, img: '/images/38.PinkRosesInGlassVase.png' },
            { id: 39, name: "Red Roses Bunch", price: 99, img: '/images/39.RedRosesBunch.png' },
            { id: 40, name: "White Roses With Gypsy Bouquet", price: 99, img: '/images/40.WhiteRosesWithGypsyBouquet.png' },
            { id: 41, name: "Mix Color Roses Bouquet", price: 99, img: '/images/41.MixColorRosesBouquet.png' },
            { id: 42, name: "colorful roses bouquet", price: 99, img: '/images/42.colorfulrosesbouquet.png' },
            { id: 43, name: "Mixed Rose Bouquet", price: 99, img: '/images/43.MixedRoseBouquet.png' },
            { id: 44, name: "Peaceful Moments", price: 99, img: '/images/44.PeacefulMoments.png' },
            { id: 45, name: "Peaceful White Roses Bouquet", price: 99, img: '/images/45.PeacefulWhiteRosesBouquet.png' },
            { id: 46, name: "Pink Rose Bouquet", price: 99, img: '/images/46.PinkRoseBouquet.png' },
            { id: 47, name: "Pink Rose Bouquet With Teddy", price: 99, img: '/images/47.PinkRoseBouquetWithTeddy.png' },
            { id: 48, name: "Father’s Day Special Rose and Cake Combo", price: 99, img: '/images/48.Father’sDaySpeciaRoseandCakeCombo.png' },
            { id: 49, name: "Rose and Cake Combo", price: 99, img: '/images/49.RoseandCakeCombo.jpg' },
            { id: 50, name: "Pinky Promise Rose Bouquet", price: 99, img: '/images/50.PinkyPromiseRoseBouquet.png' },
            { id: 51, name: "Pink Roses With Chocolate Ball Bouquet", price: 99, img: '/images/51.PinkRosesWithChocolateBallBouquet.png' },
            { id: 52, name: "Father’s Day Special Roses And Cake", price: 99, img: '/images/52.Father’sDaySpecialRosesAndCake.png' },
            { id: 53, name: "promise day All That Love Needs flower and cake combo", price: 99, img: '/images/53.promisedayAllThatLoveNeedslowerandcakeombo.jpg' },
            { id: 54, name: "promise day Cake Flower Combo", price: 99, img: '/images/54.promisedayCakeFlowerCombo.jpg' },
            { id: 55, name: "promise day Choco Strawberry Cake And Red Rose Box combo", price: 99, img: '/images/55.promisedayChocStrawberryCakeAndRedRoseBoxcombo.jpg' },
            { id: 56, name: "promise day Colorful Magic", price: 99, img: '/images/56.promisedayColorfulMagic.jpg' },
            { id: 57, name: "promise day Mix Rose Truffle Cake Combo", price: 99, img: '/images/57.promisedayMixRoseTruffleCakeCombo.jpg' },
            { id: 58, name: "promise day Personalized Photo Cake And Roses", price: 99, img: '/images/58.promisedayPersonalizedPhotoCakeAndRoses.jpg' },
            { id: 59, name: "promise day Red Rosey Velvet Cake", price: 99, img: '/images/59.promisedayRedRoseyVelvetCake.jpg' },
            { id: 60, name: "propose day Cake Flower Combo", price: 99, img: '/images/60.proposedayCakeFlowerCombo.jpg' },
            { id: 61, name: "Chocolate KitKat Cake with Red Rose", price: 99, img: '/images/61.ChocolateKitKatCakewithRedRose.jpg' },
            { id: 62, name: "Heart Shape Bouquet With Cake", price: 99, img: '/images/62.HeartShapeBouquetWithCake.jpg' },
            { id: 63, name: "Red Roses Bouquet", price: 99, img: '/images/63.RedRosesBouquet.png' },
            { id: 64, name: "Red Roses Chocolate Combo", price: 99, img: '/images/64.RedRosesChocolateCombo.jpg' },
            { id: 65, name: "Red velvet Roses", price: 99, img: '/images/65.RedvelvetRoses.png' },
            { id: 66, name: "Red Shine Yellow Rose Bouquet", price: 99, img: '/images/66.RedShineYellowRoseBouquet.png' },
            { id: 67, name: "Rose Bouquet Chocolate Cake Combo", price: 99, img: '/images/67.RoseBouquetChocolateCakeCombo.png' },
            { id: 68, name: "Rose day beauty in Red flowers and cake combo", price: 99, img: '/images/68.RosedaybeautyinRedlowersandcakecombo.jpg' },
            { id: 69, name: "rose day blush n Chocolate Cake flowers and cake combo", price: 99, img: '/images/69.rosedayblushnChocolateCakelowersandcakecombo.jpg' },
            { id: 70, name: "rose day Cozy Rosy flowers and cake combo", price: 99, img: '/images/70.rosdayCozRosyflowersandcakecombo.jpg' },
            { id: 71, name: "Rose day glorious Roses Indulgence flowers and cake combo", price: 99, img: '/images/71.RosedaygloriousRosesIndulgencelowersandakecombo.jpg' },
            { id: 72, name: "rose day Indulgence Rose flowers and cake combo", price: 99, img: '/images/72.rosedayIndulgenceRoselowersandcakecombo.jpg' },
            { id: 73, name: "rose day Pink Roses N Truffle Combo", price: 99, img: '/images/73.rosedayPinkRosesNTruffleCombo.jpg' },
            { id: 74, name: "Rose Day Red Rose N Truffle", price: 99, img: '/images/74.RoseDayRedRoseNTruffle.jpg' },
            { id: 75, name: "Rose day romance red flowers and cake combo", price: 99, img: '/images/75.Rosedaromanceredflowersandcakecombo.jpg' },
            { id: 76, name: "Rose day Rose n Cake flowers and cake combo", price: 99, img: '/images/76.RosedayRosnCakeflowersandcakecombo.webp' },
            { id: 77, name: "rose day Simplicity at Its Best flowers and cake combo", price: 99, img: '/images/77.rosedaySimplicityatItsBestflowersandcakecombo.jpg' },
            { id: 78, name: "Roses N Butterscotch", price: 99, img: '/images/78.RosesNButterscotch.png' },
            { id: 79, name: "Roses N Cake Combo", price: 99, img: '/images/79.RosesNCakeCombo.png' },
            { id: 80, name: "Royal Legacy Of Roses", price: 99, img: '/images/80.RoyalLegacyOfRoses.png' },
            { id: 81, name: "Red Roses Bouquet", price: 99, img: '/images/81.RedRosesBouquet.png' },
            { id: 82, name: "Sunny Yellow Rose Bouquet", price: 99, img: '/images/82.SunnyYellowRoseBouquet.png' },
            { id: 83, name: "Sweet Pink Roses Bunch", price: 99, img: '/images/83.SweetPinkRosesBunch.webp' },
            { id: 84, name: "Teddy Day Roses and Cake Combo", price: 99, img: '/images/84.TeddyDayRosesandCakeCombo.jpg' },
            { id: 85, name: "teddy day Teddy Red Rose Combo", price: 99, img: '/images/85.teddydayTeddyRedRoseCombo.jpg' },
            { id: 86, name: "Teddy & Flower Combo", price: 99, img: '/images/86.Teddy&FlowerCombo.jpg' },
            { id: 87, name: "The Love Whisper combo", price: 99, img: '/images/87.TheLoveWhispercombo.jpg' },
            { id: 88, name: "valaentines day Roses and Rocher", price: 99, img: '/images/88.valaentinesdayRosesandRocher.jpg' },
            { id: 89, name: "valentine day Magical Love", price: 99, img: '/images/89.valentinedayMagicalLove.jpg' },
            { id: 90, name: "Valentine Surprise flowers and cake combo", price: 99, img: '/images/90.ValentineSurpriseflowersandcakecombo.jpg' },
            { id: 91, name: "valentines day Fruitful Love", price: 99, img: '/images/91.valentinesdayFruitfulLove.jpg' },
            { id: 92, name: "valentines day Roses N Butterscotch", price: 99, img: '/images/92.valentinesdayRosesNButterscotch.jpg' },
            { id: 93, name: "valentines day Silk and Pink flower and cake combo", price: 99, img: '/images/93.valentinesdaySilkandPinkflowerandcakecombo.jpg' },
            { id: 94, name: "Red Roses Bouquet", price: 99, img: '/images/94.RedRosesBouquet.png' },
            { id: 95, name: "White Roses Bunch In A Vase", price: 99, img: '/images/95.WhiteRosesBunchInAVase.webp' },
            { id: 96, name: "White Roses N Celebrations", price: 99, img: '/images/96.WhiteRoseNCelebrations.jpg' },
            { id: 97, name: "Yellow Roses Bunch", price: 99, img: '/images/97.YellowRosesBunch.avif' },
        ],
        Coffee: [
            { id: 98, name: "Lily & Rose Mixed Flower Bouquet", price: 79, img: "/images/1.Lily&RoseMixedFlowerBouquet.jpg" },
            { id: 99, name: "Mixed Flower Basket", price: 79, img: "/images/2.MixedFlowerBasket.png" },
            { id: 100, name: "White Lilies Flower Bouquet", price: 79, img: "/images/3.WhiteLiliesFlowerBouquet.jpg" },
            { id: 101, name: "Best Lily flower", price: 79, img: "/images/4.BestLilyflower.png" },
            { id: 102, name: "carnations and lily flower bouquet", price: 79, img: "/images/5.carnationsandilyflowerbouque.png" },
            { id: 103, name: "Lilies With Rose Flower Bouquet", price: 79, img: "/images/6.LiliesWithRoseFlowerBouquet.png" },
            { id: 104, name: "carnation and lilies flower bunch", price: 79, img: "/images/7.carnationandlilieslowerbunch.png" },
            { id: 105, name: "Lily And Carnation Flower Bouquet", price: 79, img: "/images/8.LilyAndCarnationFlowerBouquet.pngg" },
            { id: 106, name: "Rose and Lily Flower Bouquet", price: 79, img: "/images/9.RoseandLilyFlowerBouquet.png" },
            { id: 107, name: "Bunch of Mix Flowers", price: 79, img: "/images/10.BunchofMixFlowers.png" },
            { id: 108, name: "Mix Lilies Bouquet With A Vase", price: 79, img: "/images/11.MixLiliesBouquetWithAVase.png" },
            { id: 109, name: "Pink Lilies Flower Bouquet", price: 79, img: "/images/12.PinkLiliesFlowerBouquet.png" },
            { id: 110, name: "Lily Birthday Flower Bouquet", price: 79, img: "/images/13.LilyBirthdayFlowerBouquet.png" },
            { id: 111, name: "carnation and lily combo bouquet", price: 79, img: "/images/14.carnationandlilycombobouquet.png" },
            { id: 112, name: "lily and carnation flower", price: 79, img: "/images/15.lilyandcarnationflower.png" },
            { id: 113, name: "Lily With Carnation flower bouquet", price: 79, img: "/images/16.LilyWithCarnationflowerbouquet.png" },
            { id: 114, name: "lily and carnation flower with vase", price: 79, img: "/images/17.lilyandcarnationflowerwithvase.png" },
            { id: 115, name: "lily and rose flower bouquet", price: 79, img: "/images/18.lilyandroseflowerbouquet.png" },
            { id: 116, name: "Pink And White lily Flower", price: 79, img: "/images/19.PinkAndWhitelilylower.png" },
            { id: 117, name: "Gerberas And Lilies Flower Bouquet", price: 79, img: "/images/20.GerberasAndLiliesFlowerBouquet.png" },
            { id: 118, name: "pink lilies and carnation flower bouquet", price: 79, img: "/images/21.pinkliliesandcarnationflowerbouquet.png" },
            { id: 119, name: "Mixed flower bouquet", price: 79, img: "/images/22.Mixedflowerbouquet.png" },
            { id: 120, name: "Rose And Lilly Flower Combo Bouquet", price: 79, img: "/images/23.RoseAndLillyFlowerComboBouquet.png" },
            { id: 121, name: "Mix Lily With Red Vase", price: 79, img: "/images/24.MixLilyWithRedVase.png" },
            { id: 122, name: "Oozing Love", price: 79, img: "/images/25.OozingLove.png" },
            { id: 123, name: "Pink Lilies In A Vase", price: 79, img: "/images/26.PinkLiliesInAVase.png" },
            { id: 124, name: "Father’sDaySpecialPeaceLily.png", price: 79, img: "/images/27.Father’sDaySpecialPeaceLily.png" },
            { id: 125, name: "Rose Lily Glass Vase Combo", price: 79, img: "/images/28.RoseLilyGlassVaseCombo.png" },
            { id: 126, name: "Serene Beauty", price: 79, img: "/images/29.SereneBeauty.png" },
            { id: 127, name: "Sunshine Joy", price: 79, img: "/images/30.SunshineJoy.png" },
            { id: 128, name: "Teddy & Flower Combo", price: 79, img: "/images/31.Teddy&lowerCombo.jpg" },
            { id: 129, name: "valentines day Colorful Heart flowers and cake combo", price: 79, img: "/images/32.valentinesdayColorfulHeartflowersandcakecombo.jpg" },
            { id: 130, name: "valentines day exotic Hues flowers and cake combo", price: 79, img: "/images/33.valentinesdayexoticHuesflowersandcakecombo.webp" },
            { id: 131, name: "White Lily Bouquet", price: 79, img: "/images/34.WhiteLilyBouquet.png" },
            { id: 132, name: "white lily gerbera flower bouquet", price: 79, img: "/images/36.whitelilygerberaflowerbouquet.png" },


        ],
        Pizza: [
            { id: 133, name: "Valentine’s Special Blue Orchids Bouquet", price: 149, img: '/images/1.Valentine’sSpecialBlueOrchidsBouquet.png' },
            { id: 134, name: "Orchid and Carnations in Udaipur", price: 149, img: '/images/2.OrchidandCarnationsinUdaipur.png' },
            { id: 135, name: "Birthday Special Orchid Flowers", price: 149, img: '/images/3.BirthdaySpecialOrchidlowers.png' },
            { id: 136, name: "purple Orchis Flower With Basket", price: 149, img: '/images/4.purpleOrchisFlowerWithBasket.png' },
            { id: 137, name: "Best Purple Orchids bouquet", price: 149, img: '/images/5.BestPurpleOrchidsbouquet.png' },
            { id: 138, name: "Purple Orchid Flower Bouquet", price: 149, img: '/images/6.PurpleOrchidFlowerBouquet.png' },
            { id: 139, name: "Mixed Flower Bunch", price: 149, img: '/images/7.MixedFlowerBunch.png' },
            { id: 140, name: "Orchids Bouquet and Chocolate Cake", price: 149, img: '/images/8.OrchidsBouquetandChocolateCake.png' },
            { id: 141, name: "Orchids Flowers Bouquet", price: 149, img: '/images/9.OrchidsFlowersBouquet.png' },
            { id: 142, name: "OrchidsFlowersBouquet.png", price: 149, img: '/images/10.OrchidsFlowersBouquet.png' },
            { id: 143, name: "Luxurious Romantic Love", price: 149, img: '/images/11.LuxuriousRomanticLove.png' },
            { id: 144, name: "Orchid Bonanza", price: 149, img: '/images/12.OrchidBonanza.png' },
            { id: 145, name: "OrchidNRoses.png", price: 149, img: '/images/13.OrchidNRoses.png' },
        ],
        Sandwich: [
            { id: 13, name: "Veg Sandwich", price: 79, img: '' },
        ],
        Shakes: [
            { id: 15, name: "Chocolate Shake", price: 129, img: '' },],
    };

    const [activeTab, setActiveTab] = useState("Tea");
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [showCheckoutPopup, setShowCheckoutPopup] = useState(false);
    const [showOTPVerification, setShowOTPVerification] = useState(false);
    const [showCustomerInfo, setShowCustomerInfo] = useState(false);
    const [showOrderSuccess, setShowOrderSuccess] = useState(false);

    const [customerData, setCustomerData] = useState({
        name: "",
        phone: "",
        otp: "",
        address: "",
        city: "",
        pincode: ""
    });

    const [generatedOTP, setGeneratedOTP] = useState("");

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

    const subtotal = cart.reduce((sum, x) => sum + x.price * x.qty, 0);

    const categories = [
        { name: "Tea", icon: "🍵" },
        { name: "Coffee", icon: "☕" },
        { name: "Pizza", icon: "🍕" },
        { name: "Sandwich", icon: "🥪" },
        { name: "Shakes", icon: "🥤" },
    ];

    const variants = {
        initial: { opacity: 0, x: 40 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -40 },
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
            otp: "",
            address: "",
            city: "",
            pincode: ""
        });
    };

    return (
        <div className="bg-white text-white min-h-screen p-4 overflow-hidden">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-lg font-bold text-black ">Have A Nice Day</h1>
                <button
                    onClick={() => setShowCart(!showCart)}
                    className="bg-red-600 px-3 py-2 rounded-full text-sm"
                >
                    {showCart ? "Menu 🍽️" : `Cart 🛒 (${cart.length})`}
                </button>
            </div>

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
                        <div className="flex overflow-x-auto space-x-2 mb-4 scrollbar-hide">
                            {categories.map((cat) => (
                                <button
                                    key={cat.name}
                                    onClick={() => setActiveTab(cat.name)}
                                    className={`flex items-center space-x-1 px-4 py-2 rounded-xl text-sm ${activeTab === cat.name
                                        ? "bg-red-600 text-white"
                                        : "bg-[#d3cfcf] text-black"
                                        }`}
                                >
                                    <span>{cat.icon}</span>
                                    <span>{cat.name}</span>
                                </button>
                            ))}
                        </div>

                        <motion.div
                            key={activeTab}
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className="space-y-3"
                        >
                            <h2 className="text-black mb-3 text-sm font-semibold uppercase">
                                {activeTab}
                            </h2>
                            {menuData[activeTab].map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center bg-[#efefef] rounded-lg px-4 py-3"
                                >
                                    <img width={75} src={item.img} alt="" />
                                    <div>
                                        <h3 className="text-base text-black">{item.name}</h3>
                                        <p className="text-black text-sm">Rs {item.price}.00</p>
                                    </div>
                                    <button
                                        onClick={() => addToCart(item)}
                                        className="bg-red-600 text-white px-4 py-1 rounded-md text-sm"
                                    >
                                        Add
                                    </button>
                                </div>
                            ))}
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
                        className="bg-[#1c1c1c] rounded-lg p-4"
                    >
                        <h2 className="text-lg font-semibold text-red-500 mb-3">
                            Your Order Summary
                        </h2>

                        {cart.length === 0 ? (
                            <p className="text-gray-400 text-sm">Your cart is empty.</p>
                        ) : (
                            <>
                                {cart.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex justify-between items-center mb-3 border-b border-gray-700 pb-2"
                                    >
                                        <div>
                                            <h3 className="text-base">{item.name}</h3>
                                            <p className="text-gray-400 text-sm">
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
                                            <span>{item.qty}</span>
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
                                        className="bg-red-600 px-5 py-2 rounded-md font-medium"
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
                            className="bg-[#1c1c1c] rounded-lg p-6 w-full max-w-md"
                        >
                            <h3 className="text-lg font-semibold mb-4">Enter Your Details</h3>
                            <div className="space-y-3">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    value={customerData.name}
                                    onChange={(e) => setCustomerData({ ...customerData, name: e.target.value })}
                                    className="w-full bg-[#2c2c2c] rounded-lg px-4 py-2 text-white"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    value={customerData.phone}
                                    onChange={(e) => setCustomerData({ ...customerData, phone: e.target.value })}
                                    className="w-full bg-[#2c2c2c] rounded-lg px-4 py-2 text-white"
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
                                    className="flex-1 bg-red-600 px-4 py-2 rounded-lg disabled:opacity-50"
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
                            className="bg-[#1c1c1c] rounded-lg p-6 w-full max-w-md"
                        >
                            <h3 className="text-lg font-semibold mb-4">Verify OTP</h3>
                            <p className="text-gray-400 text-sm mb-4">
                                OTP sent to {customerData.phone}
                            </p>
                            <input
                                type="text"
                                placeholder="Enter OTP"
                                value={customerData.otp}
                                onChange={(e) => setCustomerData({ ...customerData, otp: e.target.value })}
                                className="w-full bg-[#2c2c2c] rounded-lg px-4 py-2 text-white mb-4"
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
                                    className="flex-1 bg-red-600 px-4 py-2 rounded-lg"
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
                        className="bg-[#1c1c1c] rounded-lg p-4"
                    >
                        <h2 className="text-lg font-semibold text-red-500 mb-4">
                            Customer Information
                        </h2>

                        <div className="mb-6">
                            <h3 className="font-semibold mb-3">Order Summary</h3>
                            {cart.map((item) => (
                                <div key={item.id} className="flex justify-between mb-2">
                                    <span>{item.name} x {item.qty}</span>
                                    <span>Rs {item.price * item.qty}.00</span>
                                </div>
                            ))}
                            <div className="border-t border-gray-700 pt-2 mt-2">
                                <div className="flex justify-between font-semibold">
                                    <span>Total Amount:</span>
                                    <span className="text-red-400">Rs {subtotal}.00</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h3 className="font-semibold">Your Details</h3>
                            <input
                                type="text"
                                placeholder="Full Address"
                                value={customerData.address}
                                onChange={(e) => setCustomerData({ ...customerData, address: e.target.value })}
                                className="w-full bg-[#2c2c2c] rounded-lg px-4 py-2 text-white"
                            />
                            <div className="flex space-x-3">
                                <input
                                    type="text"
                                    placeholder="City"
                                    value={customerData.city}
                                    onChange={(e) => setCustomerData({ ...customerData, city: e.target.value })}
                                    className="flex-1 bg-[#2c2c2c] rounded-lg px-4 py-2 text-white"
                                />
                                <input
                                    type="text"
                                    placeholder="Pincode"
                                    value={customerData.pincode}
                                    onChange={(e) => setCustomerData({ ...customerData, pincode: e.target.value })}
                                    className="flex-1 bg-[#2c2c2c] rounded-lg px-4 py-2 text-white"
                                />
                            </div>
                        </div>

                        <button
                            onClick={handleCustomerInfoSubmit}
                            disabled={!customerData.address || !customerData.city || !customerData.pincode}
                            className="w-full bg-red-600 px-4 py-3 rounded-lg font-semibold mt-6 disabled:opacity-50"
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
                        className="bg-[#1c1c1c] rounded-lg p-6 text-center"
                    >
                        <div className="text-6xl mb-4">🎉</div>
                        <h2 className="text-2xl font-semibold text-green-400 mb-4">
                            Order Placed Successfully!
                        </h2>

                        <div className="bg-[#2c2c2c] rounded-lg p-4 mb-6">
                            <h3 className="font-semibold mb-3">Order Confirmed</h3>
                            <div className="space-y-2 text-sm">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex justify-between">
                                        <span>{item.name} x {item.qty}</span>
                                        <span>Rs {item.price * item.qty}.00</span>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-gray-700 pt-3 mt-3">
                                <div className="flex justify-between font-semibold text-lg">
                                    <span>Total Amount:</span>
                                    <span className="text-red-400">Rs {subtotal}.00</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-gray-400 text-sm mb-6">
                            <p>Thank you for your order, {customerData.name}!</p>
                            <p>Your order will be delivered to {customerData.address}</p>
                        </div>

                        <button
                            onClick={resetOrder}
                            className="bg-red-600 px-6 py-3 rounded-lg font-semibold"
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