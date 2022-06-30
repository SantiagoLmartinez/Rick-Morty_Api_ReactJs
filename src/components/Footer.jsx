import styled from "styled-components"

const FooterComp = () => {

    return (
        <FooterStyled>
            <footer className="footer bottom-fixed bg-dark pt-2">
                <p className="text-white text-center mb-o">Santiago L Martinez</p>
                <div className="social-media d-flex justify-content-center">
                    {/* LINKEDIN */}
                    <a href="https://www.linkedin.com/in/santiago-l-martinez/" target="_blank">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    {/* GITHUB */}
                    <a href="https://github.com/SantiagoLmartinez" target="_blank">
                        <i className="fa-brands fa-github-square"></i>
                    </a>
                    {/* EMAIL */}
                    <a href="mailto:slm17slm17@gmail.com" target="_blank">
                        
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                    {/* WHATSAPPS */}
                    <a href="http://wa.me/5491162157367" target="_blank">
                        <i className="fa-brands fa-whatsapp-square"></i>
                    </a>
                </div>
            </footer>
        </FooterStyled>
    )
}

export default FooterComp

const FooterStyled = styled.footer`
*{
    *{margin: 0; padding: 0; box-sizing: border-box;}

    .social-media  i{
        color: #bbcf47;
        margin-left: 5px;
    }
}
`