import './Footer.css'

export default function Footer(){
    return(
        <div className="footer_container">
            <div className="footer_text_left">
                <p>Copyright &copy;2024 React Project by <span className='footer-name'>Gaurav Singh</span>. </p>
            </div>
            <div className="footer_text_right">
            <p>Not an actual Portfolio. Just built it as a project using React+Vite.</p>
            </div>
        </div>
    );
}