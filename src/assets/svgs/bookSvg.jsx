const BookSvg = (props) => {
    return (
        <div className={`custom-shape-divider-top-1730491062 rotate-180 mt-10 ${props.class}`}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="gradientId" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "rgba(208,140,131,1)", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "rgba(219,157,149,1)", stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" fill="url(#gradientId)"></path>
            </svg>
        </div>
    );
}

export default BookSvg;
