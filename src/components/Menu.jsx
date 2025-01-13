import { useEffect, useState } from "react";
import Products from "./Products";

const Menu = () => {
    const [sizePattern, setSizePattern] = useState("menu");
    const [data, setData] = useState(
        [
            {
                "id": 1,
                "product": {
                    "name": "vadapav",
                    "price": "20",
                    "type": "maharashtrian",
                    "image": "images/product/maharastrian/vadapav.jpeg"
                }
            },
            {
                "id": 2,
                "product": {
                    "name": "pav bhaji",
                    "price": "60",
                    "type": "maharashtrian",
                    "image": "images/product/maharastrian/pav-bhaji.jpeg"
                }
            },
            {
                "id": 3,
                "product": {
                    "name": "puran poli",
                    "price": "50",
                    "type": "maharashtrian",
                    "image": "images/product/maharastrian/puran-poli.jpeg"
                }
            },
            {
                "id": 4,
                "product": {
                    "name": "poha",
                    "price": "25",
                    "type": "maharashtrian",
                    "image": "images/product/maharastrian/poha.jpeg"
                }
            },
            {
                "id": 5,
                "product": {
                    "name": "misal",
                    "price": "40",
                    "type": "maharashtrian",
                    "image": "../images/product/maharastrian/misal-pav.jpeg"
                }
            },
            {
                "id": 6,
                "product": {
                    "name": "pithla bhakri",
                    "price": "70",
                    "type": "maharashtrian",
                    "image": "../images/product/maharastrian/pithla-bhakri.jpeg"
                }
            },
            {
                "id": 7,
                "product": {
                    "name": "varan bhat",
                    "price": "50",
                    "type": "maharashtrian",
                    "image": "../images/product/maharastrian/varan-bhat'.jpeg"
                }
            },
            {
                "id": 8,
                "product": {
                    "name": "dal makhni",
                    "price": "80",
                    "type": "punjabi",
                    "image": "../images/product/punjabi/dal-makhni.jpeg"
                }
            },
            {
                "id": 9,
                "product": {
                    "name": "chhole bhature",
                    "price": "60",
                    "type": "punjabi",
                    "image": "../images/product/punjabi/chhole-bhature.jpeg"
                }
            },
            {
                "id": 10,
                "product": {
                    "name": "rajma chawal",
                    "price": "70",
                    "type": "punjabi",
                    "image": "../images/product/punjabi/rajma-chaval.jpeg"
                }
            },
            {
                "id": 11,
                "product": {
                    "name": "aloo paratha",
                    "price": "40",
                    "type": "punjabi",
                    "image": "../images/product/punjabi/alu-paratha.jpeg"
                }
            },
            {
                "id": 12,
                "product": {
                    "name": "lassi",
                    "price": "40",
                    "type": "punjabi",
                    "image": "../images/product/punjabi/lassi.jpeg"
                }
            },
            {
                "id": 13,
                "product": {
                    "name": "paneer kulchha",
                    "price": "50",
                    "type": "punjabi",
                    "image": "../images/product/punjabi/paneer-kulchha.jpeg"
                }
            },
            {
                "id": 14,
                "product": {
                    "name": "dhokla",
                    "price": "30",
                    "type": "gujarati",
                    "image": "../images/product/gujarati/dhokla.jpeg"
                }
            },
            {
                "id": 15,
                "product": {
                    "name": "undhiyu",
                    "price": "80",
                    "type": "gujarati",
                    "image": "/images/product/gujarati/undhiyu.jpeg"
                }
            },
            {
                "id": 16,
                "product": {
                    "name": "fafda jalebi",
                    "price": "50",
                    "type": "gujarati",
                    "image": "/images/product/gujarati/fafda-jalebi.jpeg"
                }
            },
            {
                "id": 17,
                "product": {
                    "name": "khaman",
                    "price": "30",
                    "type": "gujarati",
                    "image": "images/product/gujarati/khaman.jpeg"
                }
            },
            {
                "id": 18,
                "product": {
                    "name": "handvo",
                    "price": "40",
                    "type": "gujarati",
                    "image": "images/product/gujarati/handvo.jpeg"
                }
            },
            {
                "id": 19,
                "product": {
                    "name": "patra",
                    "price": "35",
                    "type": "gujarati",
                    "image": "images/product/gujarati/patra.jpeg"
                }
            },
            {
                "id": 20,
                "product": {
                    "name": "methina gota",
                    "price": "25",
                    "type": "gujarati",
                    "image": "images/product/gujarati/methina-gota.jpeg"
                }
            },
            {
                "id": 21,
                "product": {
                    "name": "khakhra",
                    "price": "20",
                    "type": "gujarati",
                    "image": "images/product/gujarati/khakra.jpeg"
                }
            },
            {
                "id": 22,
                "product": {
                    "name": "ghugra",
                    "price": "40",
                    "type": "gujarati",
                    "image": "images/product/gujarati/ghugra.jpeg"
                }
            },
            {
                "id": 23,
                "product": {
                    "name": "khichu",
                    "price": "30",
                    "type": "gujarati",
                    "image": "images/product/gujarati/Khichu.jpeg"
                }
            },
            {
                "id": 24,
                "product": {
                    "name": "thepla",
                    "price": "40",
                    "type": "gujarati",
                    "image": "images/product/gujarati/thepla.jpeg"
                }
            },
            {
                "id": 25,
                "product": {
                    "name": "sev khamni",
                    "price": "35",
                    "type": "gujarati",
                    "image": "images/product/gujarati/sev-khamni.jpeg"
                }
            },
            {
                "id": 26,
                "product": {
                    "name": "manchuriyan",
                    "price": "60",
                    "type": "chinese",
                    "image": "images/product/chinese/manchuriyan.jpeg"
                }
            },
            {
                "id": 27,
                "product": {
                    "name": "hakka noodles",
                    "price": "50",
                    "type": "chinese",
                    "image": "images/product/chinese/Hakka-noodles.jpeg"
                }
            },
            {
                "id": 28,
                "product": {
                    "name": "momos",
                    "price": "40",
                    "type": "chinese",
                    "image": "images/product/chinese/momos.jpeg"
                }
            },
            {
                "id": 29,
                "product": {
                    "name": "chilli chicken",
                    "price": "100",
                    "type": "chinese",
                    "image": "images/product/chinese/chilli-chicken.jpeg"
                }
            },
            {
                "id": 30,
                "product": {
                    "name": "fried rice",
                    "price": "70",
                    "type": "chinese",
                    "image": "images/product/chinese/fried-rice.jpeg"
                }
            },
            {
                "id": 31,
                "product": {
                    "name": "maggi",
                    "price": "25",
                    "type": "chinese",
                    "image": "images/product/chinese/maggi.jpeg"
                }
            },
            {
                "id": 32,
                "product": {
                    "name": "pitha",
                    "price": "30",
                    "type": "assam",
                    "image": "images/product/assam/pitha.jpeg"
                }
            },
            {
                "id": 33,
                "product": {
                    "name": "bamboo shoot fry",
                    "price": "50",
                    "type": "assam",
                    "image": "images/product/assam/Bamboo-Shoots-fry.jpeg"
                }
            },
            {
                "id": 34,
                "product": {
                    "name": "fish curry",
                    "price": "100",
                    "type": "assam",
                    "image": "images/product/assam/fish-curry.jpeg"
                }
            },
            {
                "id": 35,
                "product": {
                    "name": "fish fry",
                    "price": "80",
                    "type": "assam",
                    "image": "images/product/assam/fish-fry.jpeg"
                }
            },
            {
                "id": 36,
                "product": {
                    "name": "idli sambhar",
                    "price": "30",
                    "type": "south indian",
                    "image": "images/product/south-indian/Idli-sambhar.jpeg"
                }
            },
            {
                "id": 37,
                "product": {
                    "name": "mendu vada",
                    "price": "40",
                    "type": "south indian",
                    "image": "images/product/south-indian/Medu-Vada.jpeg"
                }
            },
            {
                "id": 38,
                "product": {
                    "name": "masala dosa",
                    "price": "50",
                    "type": "south indian",
                    "image": "images/product/south-indian/Masala-Dosa.jpeg"
                }
            },
            {
                "id": 39,
                "product": {
                    "name": "uttapam",
                    "price": "40",
                    "type": "south indian",
                    "image": "images/product/south-indian/Uthapam.jpeg"
                }
            },
            {
                "id": 40,
                "product": {
                    "name": "appam and ishtu",
                    "price": "70",
                    "type": "south indian",
                    "image": "images/product/south-indian/ishtu.jpeg"
                }
            },
            {
                "id": 41,
                "product": {
                    "name": "pesarattu",
                    "price": "40",
                    "type": "south indian",
                    "image": "images/product/south-indian/pesarattu.jpeg"
                }
            },
            {
                "id": 42,
                "product": {
                    "name": "rasam",
                    "price": "30",
                    "type": "south indian",
                    "image": "https://i.ibb.co/4pY285P/rasam.jpg"
                }
            },
            {
                "id": 43,
                "product": {
                    "name": "payasam",
                    "price": "50",
                    "type": "south indian",
                    "image": "https://i.ibb.co/NyRXk2T/payasam.jpg"
                }
            },
            {
                "id": 44,
                "product": {
                    "name": "upma",
                    "price": "30",
                    "type": "south indian",
                    "image": "https://i.ibb.co/RcwYF76/upma.jpg"
                }
            },
            {
                "id": 45,
                "product": {
                    "name": "ayala curry",
                    "price": "100",
                    "type": "south indian",
                    "image": "https://i.ibb.co/ZgBBz48/ayala-curry.jpg"
                }
            }
        ]
    );
    const [filterFoodType, setFilterFoodType] = useState(
        [
            {
                "id": 1,
                "product": {
                    "name": "vadapav",
                    "price": "20",
                    "type": "maharashtrian",
                    "image": "images/product/maharastrian/vadapav.jpeg"
                }
            },
            {
                "id": 2,
                "product": {
                    "name": "pav bhaji",
                    "price": "60",
                    "type": "maharashtrian",
                    "image": "images/product/maharastrian/pav-bhaji.jpeg"
                }
            },
            {
                "id": 3,
                "product": {
                    "name": "puran poli",
                    "price": "50",
                    "type": "maharashtrian",
                    "image": "images/product/maharastrian/puran-poli.jpeg"
                }
            },
            {
                "id": 4,
                "product": {
                    "name": "poha",
                    "price": "25",
                    "type": "maharashtrian",
                    "image": "images/product/maharastrian/poha.jpeg"
                }
            },
            {
                "id": 5,
                "product": {
                    "name": "misal",
                    "price": "40",
                    "type": "maharashtrian",
                    "image": "../images/product/maharastrian/misal-pav.jpeg"
                }
            },
            {
                "id": 6,
                "product": {
                    "name": "pithla bhakri",
                    "price": "70",
                    "type": "maharashtrian",
                    "image": "../images/product/maharastrian/pithla-bhakri.jpeg"
                }
            },
            {
                "id": 7,
                "product": {
                    "name": "varan bhat",
                    "price": "50",
                    "type": "maharashtrian",
                    "image": "../images/product/maharastrian/varan-bhat'.jpeg"
                }
            },
            {
                "id": 8,
                "product": {
                    "name": "dal makhni",
                    "price": "80",
                    "type": "punjabi",
                    "image": "../images/product/punjabi/dal-makhni.jpeg"
                }
            },
            {
                "id": 9,
                "product": {
                    "name": "chhole bhature",
                    "price": "60",
                    "type": "punjabi",
                    "image": "../images/product/punjabi/chhole-bhature.jpeg"
                }
            },
            {
                "id": 10,
                "product": {
                    "name": "rajma chawal",
                    "price": "70",
                    "type": "punjabi",
                    "image": "../images/product/punjabi/rajma-chaval.jpeg"
                }
            },
            {
                "id": 11,
                "product": {
                    "name": "aloo paratha",
                    "price": "40",
                    "type": "punjabi",
                    "image": "../images/product/punjabi/alu-paratha.jpeg"
                }
            },
            {
                "id": 12,
                "product": {
                    "name": "lassi",
                    "price": "40",
                    "type": "punjabi",
                    "image": "../images/product/punjabi/lassi.jpeg"
                }
            },
            {
                "id": 13,
                "product": {
                    "name": "paneer kulchha",
                    "price": "50",
                    "type": "punjabi",
                    "image": "../images/product/punjabi/paneer-kulchha.jpeg"
                }
            },
            {
                "id": 14,
                "product": {
                    "name": "dhokla",
                    "price": "30",
                    "type": "gujarati",
                    "image": "../images/product/gujarati/dhokla.jpeg"
                }
            },
            {
                "id": 15,
                "product": {
                    "name": "undhiyu",
                    "price": "80",
                    "type": "gujarati",
                    "image": "/images/product/gujarati/undhiyu.jpeg"
                }
            },
            {
                "id": 16,
                "product": {
                    "name": "fafda jalebi",
                    "price": "50",
                    "type": "gujarati",
                    "image": "/images/product/gujarati/fafda-jalebi.jpeg"
                }
            },
            {
                "id": 17,
                "product": {
                    "name": "khaman",
                    "price": "30",
                    "type": "gujarati",
                    "image": "images/product/gujarati/khaman.jpeg"
                }
            },
            {
                "id": 18,
                "product": {
                    "name": "handvo",
                    "price": "40",
                    "type": "gujarati",
                    "image": "images/product/gujarati/handvo.jpeg"
                }
            },
            {
                "id": 19,
                "product": {
                    "name": "patra",
                    "price": "35",
                    "type": "gujarati",
                    "image": "images/product/gujarati/patra.jpeg"
                }
            },
            {
                "id": 20,
                "product": {
                    "name": "methina gota",
                    "price": "25",
                    "type": "gujarati",
                    "image": "images/product/gujarati/methina-gota.jpeg"
                }
            },
            {
                "id": 21,
                "product": {
                    "name": "khakhra",
                    "price": "20",
                    "type": "gujarati",
                    "image": "images/product/gujarati/khakra.jpeg"
                }
            },
            {
                "id": 22,
                "product": {
                    "name": "ghugra",
                    "price": "40",
                    "type": "gujarati",
                    "image": "images/product/gujarati/ghugra.jpeg"
                }
            },
            {
                "id": 23,
                "product": {
                    "name": "khichu",
                    "price": "30",
                    "type": "gujarati",
                    "image": "images/product/gujarati/Khichu.jpeg"
                }
            },
            {
                "id": 24,
                "product": {
                    "name": "thepla",
                    "price": "40",
                    "type": "gujarati",
                    "image": "images/product/gujarati/thepla.jpeg"
                }
            },
            {
                "id": 25,
                "product": {
                    "name": "sev khamni",
                    "price": "35",
                    "type": "gujarati",
                    "image": "images/product/gujarati/sev-khamni.jpeg"
                }
            },
            {
                "id": 26,
                "product": {
                    "name": "manchuriyan",
                    "price": "60",
                    "type": "chinese",
                    "image": "images/product/chinese/manchuriyan.jpeg"
                }
            },
            {
                "id": 27,
                "product": {
                    "name": "hakka noodles",
                    "price": "50",
                    "type": "chinese",
                    "image": "images/product/chinese/Hakka-noodles.jpeg"
                }
            },
            {
                "id": 28,
                "product": {
                    "name": "momos",
                    "price": "40",
                    "type": "chinese",
                    "image": "images/product/chinese/momos.jpeg"
                }
            },
            {
                "id": 29,
                "product": {
                    "name": "chilli chicken",
                    "price": "100",
                    "type": "chinese",
                    "image": "images/product/chinese/chilli-chicken.jpeg"
                }
            },
            {
                "id": 30,
                "product": {
                    "name": "fried rice",
                    "price": "70",
                    "type": "chinese",
                    "image": "images/product/chinese/fried-rice.jpeg"
                }
            },
            {
                "id": 31,
                "product": {
                    "name": "maggi",
                    "price": "25",
                    "type": "chinese",
                    "image": "images/product/chinese/maggi.jpeg"
                }
            },
            {
                "id": 32,
                "product": {
                    "name": "pitha",
                    "price": "30",
                    "type": "assam",
                    "image": "images/product/assam/pitha.jpeg"
                }
            },
            {
                "id": 33,
                "product": {
                    "name": "bamboo shoot fry",
                    "price": "50",
                    "type": "assam",
                    "image": "images/product/assam/Bamboo-Shoots-fry.jpeg"
                }
            },
            {
                "id": 34,
                "product": {
                    "name": "fish curry",
                    "price": "100",
                    "type": "assam",
                    "image": "images/product/assam/fish-curry.jpeg"
                }
            },
            {
                "id": 35,
                "product": {
                    "name": "fish fry",
                    "price": "80",
                    "type": "assam",
                    "image": "images/product/assam/fish-fry.jpeg"
                }
            },
            {
                "id": 36,
                "product": {
                    "name": "idli sambhar",
                    "price": "30",
                    "type": "south indian",
                    "image": "images/product/south-indian/Idli-sambhar.jpeg"
                }
            },
            {
                "id": 37,
                "product": {
                    "name": "mendu vada",
                    "price": "40",
                    "type": "south indian",
                    "image": "images/product/south-indian/Medu-Vada.jpeg"
                }
            },
            {
                "id": 38,
                "product": {
                    "name": "masala dosa",
                    "price": "50",
                    "type": "south indian",
                    "image": "images/product/south-indian/Masala-Dosa.jpeg"
                }
            },
            {
                "id": 39,
                "product": {
                    "name": "uttapam",
                    "price": "40",
                    "type": "south indian",
                    "image": "images/product/south-indian/Uthapam.jpeg"
                }
            },
            {
                "id": 40,
                "product": {
                    "name": "appam and ishtu",
                    "price": "70",
                    "type": "south indian",
                    "image": "images/product/south-indian/ishtu.jpeg"
                }
            },
            {
                "id": 41,
                "product": {
                    "name": "pesarattu",
                    "price": "40",
                    "type": "south indian",
                    "image": "images/product/south-indian/pesarattu.jpeg"
                }
            },
            {
                "id": 42,
                "product": {
                    "name": "rasam",
                    "price": "30",
                    "type": "south indian",
                    "image": "https://i.ibb.co/4pY285P/rasam.jpg"
                }
            },
            {
                "id": 43,
                "product": {
                    "name": "payasam",
                    "price": "50",
                    "type": "south indian",
                    "image": "https://i.ibb.co/NyRXk2T/payasam.jpg"
                }
            },
            {
                "id": 44,
                "product": {
                    "name": "upma",
                    "price": "30",
                    "type": "south indian",
                    "image": "https://i.ibb.co/RcwYF76/upma.jpg"
                }
            },
            {
                "id": 45,
                "product": {
                    "name": "ayala curry",
                    "price": "100",
                    "type": "south indian",
                    "image": "https://i.ibb.co/ZgBBz48/ayala-curry.jpg"
                }
            }
        ]
);
    const [display, setDisplay] = useState("none")
    const [foodType] = useState([
        "All", "punjabi", "gujarati", "maharashtrian", "assam", "south indian", "chinese"
    ]);

    useEffect(() => {
        // const localData = localStorage.getItem('Products');
        // if (localData) {
        //     const products = JSON.parse(localData);
        //     setData(products);
        //     setFilterFoodType(products);
        // } else {
        //     console.log("No product data found in localStorage.");
        // }

    }, []);

    const Siz = (e) => {
        setSizePattern(e.target.innerText);
    };

    const HandleFoodType = (choosed) => {
        const selectedType = choosed.target.innerText.toLowerCase();
        choosed.target.parentNode.querySelectorAll("li").forEach(element => {
            element.classList.remove("highlight");
        });
        choosed.target.classList.add("highlight");




        if (selectedType === "all") {
            setFilterFoodType(data);
        } else {
            const filteredData = data.filter(
                (item) => item.product.type === selectedType
            );
            setFilterFoodType(filteredData);
        }
    };
    const handleVarity = () => {
        if (display === "block") {
            setDisplay("none")
        }
        else {
            setDisplay("block")
        }
    }

    return (
        <div className="pt-4 food-menu-body">
            <div className="flex justify-between">
                <section className="varity-section">
                    <button className="varity-sm-btn" onClick={handleVarity}>|||</button>
                    <div className={`mobile-var ${display}`}>
                        {foodType.map((type, i) => (
                            <li key={i} onClick={HandleFoodType}>{type}</li>
                        ))}
                    </div>
                    <div className={`varity`}>
                        {foodType.map((type, i) => (
                            <li key={i} onClick={HandleFoodType}>{type}</li>
                        ))}
                    </div>
                </section>
                <div className="sizeBtn">
                    <button onClick={Siz}>Auto</button>
                    <button onClick={Siz}>||</button>
                </div>
            </div>
            {sizePattern === "||" ? (
                <div className="menuSm">
                    {filterFoodType.length === 0 ? (
                        <h1>NO PRODUCT FOUND</h1>
                    ) : (
                        filterFoodType.map((item, i) => (
                            <Products
                                key={i}
                                name={item.product?.name}
                                price={item.product?.price}
                                typeoff={item.product?.type}
                                imge={item.product?.image}
                            />
                        ))
                    )}
                </div>
            ) : (
                <div className="menu">
                    {filterFoodType.length === 0 ? (
                        <h1>NO PRODUCT FOUND</h1>
                    ) : (
                        filterFoodType.map((item, i) => (
                            <Products
                                key={i}
                                name={item.product?.name}
                                price={item.product?.price}
                                typeoff={item.product?.type}
                                imge={item.product?.image}
                            />
                        ))
                    )}

                </div>
            )}
            {/* <img src="images/product/chinese/momos.jpeg" alt="" /> correct way to add img */}
            
        </div>
    );
};

export default Menu;
