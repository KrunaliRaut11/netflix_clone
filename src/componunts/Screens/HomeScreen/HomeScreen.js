import React from 'react';
import "./homeScreen.css";
import Navbar from "../../Navbar/Navbar";
import Banner from '../../Banner/Banner';
import requests from '../../../Requests';
import Row from '../../Row/Row';

function HomeScreen() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Row 
            title="Netflix Orignal"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
            />

            <Row 
            title="Tranding Now"
            fetchUrl={requests.fetchTrending}
            />
            <Row 
            title="Top rated"
            fetchUrl={requests.fetchTopRated}
            />
            <Row 
            title="Action Movies"
            fetchUrl={requests.fetchActionMovies}
            />
            <Row 
            title="Comedy Movies"
            fetchUrl={requests.fetchComedyMovies}
            />
            <Row 
            title="Horror Movies"
            fetchUrl={requests.fetchHorrorMovies}
            />

            <Row 
            title="Romance Movies"
            fetchUrl={requests.fetchRomanceMovies}
            />
            <Row 
            title="Documentaries"
            fetchUrl={requests.fetchDocumentaries}
            />

        </div>
    )
}

export default HomeScreen
