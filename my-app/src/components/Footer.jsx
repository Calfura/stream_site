import "../styles/Footer.css"

export default function Footer() {

    return(
        
        <footer>
            {/* grabbing icon's for footer */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />

            {/* Copyright tagging */}
            <h6 id="copyright">© Copyright 2025</h6>
            <div class="flex-container">
                {/* Youtube hyperlink */}
                <a id="youtube" href="https://www.youtube.com/">
                    <i class="fa-brands fa-youtube"></i>
                </a>

                {/* Twitch hyperlink */}
                <a id="twitch" href="https://www.twitch.tv/">
                    <i class="fa-brands fa-twitch"></i>
                </a>

                {/* Instagram hyperlink*/}
                <a id="instagram" href="https://www.instagram.com/">
                    <i class="fa-brands fa-instagram"></i>
                </a>
            </div>
            
        </footer>
    )
}