const links = [
    { img: "/images/codechef.png", url: "https://www.codechef.com/users/debnoob2005" },
    { img: "/images/github.png", url: "https://github.com/DEBA2003-BYTE" },
    { img: "/images/leetcode.png", url: "https://leetcode.com/u/DebarghyaPramanik/" },
    { img: "/images/linkedin.png", url: "https://www.linkedin.com/in/debarghya-pramanik-b184b6209/" },
    { img: "/images/hackerrank.png",url: "https://www.hackerrank.com/profile/debarghyapraman1"},
    { img: "/images/certificate.gif",url: "https://drive.google.com/drive/folders/1fHKbajWN4i6hj1CQptWUG-8W1Ee56PRv?usp=drive_link"}
    
];

function PortfolioLinks() {
    return (
        <section className="portfolio">
            {links.map((link, index) => (
                <a key={index} href={link.url} target="_blank">
                    <img src={link.img} alt={`Project ${index + 1}`} />
                </a>
            ))}
        </section>
    );
}

export default PortfolioLinks;
