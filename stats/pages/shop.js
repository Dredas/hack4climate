import React, {useState} from 'react';
import Router from 'next/router'
import Fade from "@material-ui/core/Fade";

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
        ,
        {
            genName: 'poultry',
            name: ['chicken', 'goose']
        }
    ];


    const [product, setProduct] = useState({
        genName: '',
        name: '',
        type: '',
        origin: '',
        farmScale: ''
    });

    const handleProductSubmit = e => {
        e.preventDefault();
        const {name, value} = e.target;
        setProduct(prevState => ({...prevState, [name]: value}));
        Router.push({
            pathname: '/shopping',
        });
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
                    <p className='intro-radio'>where will you do your shopping:</p>
                    <div className='radio-wrap'>
                        <input type="radio" id="onePlace" name="origin" value="one place"
                               checked/>
                        <label for="onePlace">I will do all my shopping in one place</label>
                    </div>
                    <div className='radio-wrap'>
                        <input type="radio" id="different" name="origin" value="different places"/>
                        <label for="different">I will shop around different places</label>
                    </div>
                    <p className='input-label'>What will you buy?</p>
                    <input className='simple-input' type='text' placeholder='please type..' name='genName'
                           value={product.genName} onChange={handleChange}/>
                    <label className='select-label' for="group">please specify: </label>
                    <select className='simple-select' id='group'>
                        {additional}
                    </select>
                    <button className='simple-submit' type='submit'>Next</button>
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
                    margin: 20px;
                    height: 100%;
                    background-color: #98FB98;
                    background:linear-gradient(rgba(0, 128, 0, 0.8),transparent);
                }
                form {
                    width: 400px;
                    line-height: 2;
                    font-size: 20px;
                    padding: 50px;
                }
                .intro-radio{
                    margin-bottom: 0;
                }
                .radio-wrap{
                    margin-top: 0px;
                }
                .choose{
                    height: 40px;
                }
                .input-label{
                    margin-top: 30px;
                    font-weight: 900;
                    display: block;
                    font-size: 30px;
                }
                .simple-input{
                    width: 90%;
                    margin-bottom: 20px;
                    display: block;
                    line-height: 2.5;
                    border: 1px solid green;
                    font-size: 24px;
                    padding-left: 10px;
                }
                .simple-select{
                    padding-left: 10px;
                    width: 93%;
                    height: 30px;
                    font-size: 18px;
                    border: 1px solid green;
                    display: blcok;                    
                }
                .select-label{
                    display: block;
                }
                .simple-option{
                    margin-bottom: 50px;
                    font-size: 18px;
                }
                .simple-submit{
                    background: green;
                    corner-radius:2;
                    width: 93%;
                    height: 50px;
                    display: block;
                    margin-top: 60px;
                    color: white;
                    font-size: 20px;
                    vertical-align: center;
                }
		`}</style>
        </div>
    )
};

export default Shop

