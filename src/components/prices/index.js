import  {Wrapper, Content, MenuContent}  from "../homepage/Home/Home.styles";
import { PriceContent, DetailsContent } from "./Prices.style";

const Prices = ()=> (
    <Wrapper>
        <Content style={{
            paddingTop: 50,
            minHeight: 613,
            paddingBottom: 50,
            
        }}>
            <PriceContent>
                <h2 className="title">Hair Cut</h2>
            <DetailsContent>
            <h2>Title</h2>
        .......................................................
            <h2>Prices</h2>
            </DetailsContent>
            <DetailsContent>
            <h2>Title</h2>
            .......................................................
            <h2>Prices</h2>
            </DetailsContent>
            <DetailsContent>
            <h2>Title</h2>
            .......................................................
            <h2>Prices</h2>
            </DetailsContent>
            <DetailsContent>
            <h2>Title</h2>
            .......................................................
            <h2>Prices</h2>
            </DetailsContent>
            <h2 className="title">Extra Services</h2>
            <DetailsContent>
            <h2>Title</h2>
            .......................................................
            <h2>Prices</h2>
            </DetailsContent>
            <DetailsContent>
            <h2>Title</h2>
            .......................................................
            <h2>Prices</h2>
            </DetailsContent>
            <DetailsContent>
            <h2>Title</h2>
            .......................................................
            <h2>Prices</h2>
            </DetailsContent>
            <DetailsContent>
            <h2>Title</h2>
            .......................................................
            <h2>Prices</h2>
            </DetailsContent>
            </PriceContent>
        </Content>
    </Wrapper>
);

export default Prices;