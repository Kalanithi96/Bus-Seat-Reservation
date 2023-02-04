import React from "react";
import {Container} from "reactstrap";

import SearchBar from "../Shared/SearchBar";

const Home = () => {
    return <>
        <Header/>
        <Container>
            <section>
                <SearchBar/>
            </section>
        </Container>
    </>
};

export default Home;