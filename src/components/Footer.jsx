import { Facebook, Instagram, MailOutline, Phone, Room, Twitter, YouTube } from "@mui/icons-material"
import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
    display:flex;
    ${mobile({flexDirection:"column"})};
`
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`
const Logo=styled.h1`
    
`
const Desc=styled.p`
    margin:20px 0px;
`
const SocialContainer=styled.div`
    display:flex;
`
const SocialIcon=styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color: #${props=>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
`

const Center = styled.div`
    flex:1;
    padding:20px;
    ${mobile({display:"none"})};
`
const Title=styled.h3`
    margin-bottom:30px;
`
const List=styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`
const ListItem=styled.li`
    width:50%;
    margin-bottom:10px;
`
const Right = styled.div`
    flex:1;
    padding:20px;
    ${mobile({backgroundColor:"#fff8f8"})};
`
const ContactItem=styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`
const Payment=styled.img`
    width:50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Abhijeet.</Logo>
                <Desc>
                    Inhabit hearing perhaps on ye do no. It maids decay as there he. Smallest on suitable disposed do although blessing he juvenile in. Society or if excited forbade. Here name off yet she long sold easy whom. Differed oh cheerful procured pleasure securing suitable in. Hold rich on an he oh fine. Chapter ability shyness article welcome be do on service.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <YouTube/>
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
                    <ListItem>WishList</ListItem>
                    <ListItem>Founders</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight:"10px"}}/> New Raj Jewellers , Deen Dayal Upadhyaya</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}/> +91 7309763251</ContactItem>
                <ContactItem><MailOutline style={{marginRight:"10px"}}/> Contact@abhijeetseth24@gmail.com</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer