import React, {useState} from 'react';
import Fade from "@material-ui/core/Fade";
import Link from "next/link";

const Shop = () => {

    const food = [
        {
            genName: 'milk',
            name: ['cow milk', 'lamb milk', 'goat milk', 'soya milk', 'almond milk', 'oat milk']
        },
        {
            genName: 'bread',
            name: ['whole grain bread', 'white bread', 'black bread']
        },
        {
            genName: 'meat',
            name: ['pork', 'beaf', 'lamb', 'mix of (minced) meat']
        },
        {
            genName: 'poultry',
            name: ['chicken', 'goose']
        }
    ];


    const [product, setProduct] = useState({
        genName: '',
        name: '',
        type: '',
        typeOfShop: '',
        origin: '',
        farmScale: ''
    });

    const handleProductSubmit = e => {
        e.preventDefault();

        const {name, value} = e.target;
        setProduct(prevState => ({...prevState, [name]: value}));
        console.log(product);
    };

    const handleChange = e => {
        e.preventDefault()
        const {name, value} = e.target
        setProduct(prevState => ({...prevState, [name]: value})
        )
    };

    const additional = food.map((foodType) =>
        foodType.genName === product.genName &&
        foodType.name.map(selectOption => (
            <option className='simple-option' value={selectOption} key={selectOption}>{selectOption}</option>)
        ));

    const info = () => {
        console.log(additional);
        console.log(product.genName);
    }

    return (
        <div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Fade in={true} timeout={3000}>
                    <form className='shopping-form' onSubmit={handleProductSubmit}>
                        <p className='intro-radio'>Where will you do your shopping:</p>
                        <div className='radio-wrap'>
                            <input type="radio" id="onePlace" name="origin" value="one place"/>
                            <label htmlFor="onePlace">I will do all my shopping in one place</label>
                        </div>
                        <div className='radio-wrap'>
                            <input className='radio-input' type="radio" id="different" name="typeOfShop"
                                   value="different places"/>
                            <label htmlFor="different">I will shop around different places</label>
                        </div>
                        <p className='main-input-label'>What will you buy?</p>
                        <input className='main-input' type='text' placeholder='please type..' name='genName'
                               value={product.genName} onChange={handleChange}/>
                        <label className='select-label' htmlFor="group">please specify: </label>
                        <select className='simple-select' id='group'>
                            {additional}
                        </select>
                        <p className='intro-radio'>Is this product local or imported?</p>
                        <div className='radio-wrap'>
                            <div className='radio-input'>
                                <input type="radio" id="originLocal" name="origin" value="local"/>
                                <label htmlFor="originLocal">This product is local</label>
                            </div>
                            <div className='radio-input'>
                                <input type="radio" id="originImport" name="origin" value="imported"/>
                                <label htmlFor="originLocal">This product is imported</label>
                            </div>
                        </div>
                        <button className='simple-submit' type='button' onClick = {setProduct({genName: '',  name: '', type:'', typeOfShop:'', origin:'', farmScale: ''})}>Add new product </button>
                        <Link href="/shopping" passHref>
                            <button className='simple-submit' type='button'>Go to cart</button>
                        </Link>
                    </form>
                </Fade>
            </div>

            <style jsx global>{`
                html {
                    height: 100%;
                }
    
                body {
                    min-height: 100%;
                    display: block;
                    height: 100%;
                    background-color: #98FB98;
                    background:linear-gradient(rgba(0, 128, 0, 0.8),transparent);
                    margin: 0;
                }
                htmlForm {
                    width: 400px;
                    line-height: 2;
                    font-size: 20px;
                    padding: 10px;
                    margin: auto;
                }
                .intro-radio{
                    margin-bottom: 0;
                    font-weight: 600;
                    font-size: 30px;
                    margin-bottom: 20px;
                }
                .radio-wrap{
                    margin-top: 0px;
                }
                .radio-wrap label{
                    font-weight: 600;
                    font-size: 20px;
                }
                .choose{
                    height: 30px;
                }
                .main-input-label{
                    margin: 20px 0 0 0;
                    font-weight: 900;
                    display: block;
                    font-size: 30px;
                }
                .main-input{
                    width: 96%;
                    margin-bottom: 20px;
                    display: block;
                    line-height: 2.5;
                    border: 1px solid green;
                    font-size: 20px;
                    padding-left: 10px;
                }
                .simple-select{
                    padding-left: 10px;
                    width: 98%;
                    height: 30px;
                    font-size: 18px;
                    border: 1px solid green;
                    display: blcok;                    
                }
                .select-label{
                    display: block;
                    font-weight: 600;
                    font-size: 20px;
                }
                .simple-option{
                    margin-bottom: 30px;
                    font-size: 18px;
                }
                .simple-submit{
                    background: green;
                    corner-radius:2;
                    width: 99%;
                    height: 50px;
                    display: block;
                    margin-top: 40px;
                    color: white;
                    font-size: 20px;
                    vertical-align: center;
                }
                .imput-radio{
                    display: block;
                }
                .shopping-form {
                     margin-top: 50px;
                     width: 80%;
                }
		`}</style>
        </div>
    )
};

export default Shop

