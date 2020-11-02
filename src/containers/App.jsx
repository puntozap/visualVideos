import React, {useState, useEffect} from 'react'

import '../assets/styles/App.scss'

import Header from "../components/Header";
import Search from "../components/Search/Search";
import Categories from "../components/carousel/categories/Categories"
import Carousel from '../components/carousel/slide/Carousel'
import Item from '../components/carousel/items/Items'
import Footer from '../components/footer/Footer'

import useInitialState from '../hooks/useInitialState'

const API="http://localhost:3000/initalState"

const App = () => {
    const InitialState=useInitialState(API)
    console.log(InitialState);
    return(
    <div className="App">
        <Header />
        <Search />
        {InitialState.mylist.length > 0 &&
            <Categories title="Mi lista">
                <Carousel>
                    {InitialState.mylist.map(resp=>
                        <Item key={resp.id} {...resp} />                
                    )}
                </Carousel>
            </Categories>    
        }
        
        {InitialState.trends.length > 0 &&
            <Categories title="Tendencias">
                <Carousel>
                    {InitialState.trends.map(resp=>
                        <Item key={resp.id} {...resp} />
                    )}
                </Carousel>
            </Categories>
        }

        {InitialState.originals.length > 0 &&
            <Categories title="Originales de platzi video">
                <Carousel>
                    {InitialState.originals.map(resp=>
                        <Item key={resp.id} {...resp} />
                    )}
                </Carousel>
            </Categories>
        }


        <Footer/>
    </div>
    )
}

export default App;