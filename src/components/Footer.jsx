import { Facebook, GitHub, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from '../responsive'

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column"})};
`

const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`

`
const Description = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`


const Center = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ display: "none"})};
`

const Title = styled.h3`
    margin-bottom: 30px;

`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8"})};
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 60%;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>CARLOS.</Logo>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, deserunt illo. Doloremque iure quibusdam quisquam sed soluta? Reiciendis, sunt, eum, molestiae voluptas ratione laborum nisi temporibus dolores animi nesciunt adipisci!
                </Description>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="DD2A7B">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="3B5999">
                        <LinkedIn />
                    </SocialIcon>
                    <SocialIcon color="333333">
                        <GitHub />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{ marginRight: "10px" }} />Santa Ursula 129, Tlalpan CDMX 11000</ContactItem>
                <ContactItem><Phone style={{ marginRight: "10px" }} />+1 52 55 1234 5678</ContactItem>
                <ContactItem><MailOutline style={{ marginRight: "10px" }} />contact@carlos.com</ContactItem>
                <Payment src="https://www.pngitem.com/pimgs/m/47-479964_accepted-payment-types-payment-types-hd-png-download.png" />
            </Right>
        </Container>
    )
}

export default Footer