import React from 'react';
import "./Box.css";



export default class Box extends React.Component{

    constructor() {
        super();
        this.state = {
            res: "",
            count1: 0
        }
    }

    componentDidMount() {
        for (const key in this.props.data) {
            this.setState({
                res: this.props.data[key]
            })
        }
    }

    countFunc = () => {
        this.setState({
            count1: this.state.count1 + 1
        })
    }
    countFuncReset = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            count1: this.state.count1 - 1
        })
    }

    render() {
        let {res, count1} = this.state;
        const  items = Object.entries(res).map(([key, value])  =>  {
            let count2 = value.portions - count1;
            let res = value.portions - 1; 
            if(count2 == value.portions) {
                return  (
                    <div className="app__item" key={value.id} onClick={this.countFunc}>
                    <img src={value.img}/>
                    <span className="app__head">{value.head}</span>
                    <h3 className="app__title">{value.title}</h3>
                    <p className="app__subtitle">{value.subtitle}</p>
                    <div className="app__inner">
                        <p className="app__text"><span>{value.portions - count1}</span>&nbsp;порций</p>
                        <p className="app__text"><span>{value.mouse}</span>&nbsp;мыши в подарок</p>
                    </div>
                    <div className="app__wrapper" style={{backgroundColor: value.color}}>
                        <p>{value.weight}</p>
                        <span>КГ</span>
                    </div>
                    <p className="app__info" style={{color: value.colorText}}>{value.info}<a href="#" style={{color: value.colorLink}}>{value.links}</a></p>
                </div>
            );
            }
            else if(count2 <= res && count2 > 0) {
                return  (
                    <div className="app__item" key={value.id} onClick={this.countFunc}>
                    <img src="/1.png"/>
                    <span className="app__head">{value.head}</span>
                    <h3 className="app__title">{value.title}</h3>
                    <p className="app__subtitle">{value.subtitle}</p>
                    <div className="app__inner">
                        <p className="app__text"><span>{value.portions - count1}</span>&nbsp;порций</p>
                        <p className="app__text"><span>{value.mouse}</span>&nbsp;мыши в подарок</p>
                    </div>
                    <div className="app__wrapper" style={{backgroundColor: "#d91667"}}>
                        <p>{value.weight}</p>
                        <span>КГ</span>
                    </div>
                <p className="app__info" style={{color: "#fff"}}>Головы щучьи с чесноком да свежайшая сёмгушка.<a href="#" style={{color: value.colorLink}}></a></p>
                <p className="app__count"> Колличесво выбранного товара {count1}</p>
                <div className="app__buttons">
                    <a href="#" className="app__buy">Купить</a>
                    <a href="#" className="app__return" onClick={this.countFuncReset}>Вернуть</a>
                </div>
                </div>
            );
            }
            else if(count2 <= 1) {
                return  (
                    <div className="app__item" key={value.id}>
                    <img src="/3.png"/>
                    <span className="app__head">{value.head}</span>
                    <h3 className="app__title">{value.title}</h3>
                    <p className="app__subtitle">{value.subtitle}</p>
                    <div className="app__inner">
                        <p className="app__text"><span>{value.portions - count1}</span>&nbsp;порций</p>
                        <p className="app__text"><span>{value.mouse}</span>&nbsp;мыши в подарок</p>
                    </div>
                    <div className="app__wrapper" style={{backgroundColor: "#b3b3b3"}}>
                        <p>{value.weight}</p>
                        <span>КГ</span>
                    </div>
                <p className="app__info" style={{color: "#ffff66"}}>Печалька, с курой закончился.<a href="#" style={{color: value.colorLink}}></a></p>
                <p className="app__count"> Колличесво выбранного товара {count1}</p>
                <div className="app__buttons">
                    <button className="app__buy">Купить</button>
                    <button className="app__return" onClick={this.countFuncReset}>Вернуть</button>
                </div>
                </div>
            );
            }
        });
        return(
            <div className="app__content">
              {items}
            </div>
        )
    }
}

