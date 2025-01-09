import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="http://facebook.com" target="_blank">
                        <img src="/imagens/fb.png" alt="Logo Facebook"/>
                    </a>
                </li>
                <li>
                    <a href="http://twitter.com" target="_blank">
                        <img src="/imagens/tw.png" alt="Logo Twitter"/>
                    </a>
                </li>
                <li>
                    <a href="http://instagram.com" target="_blank">
                        <img src="/imagens/ig.png" alt="Logo Instagram"/>
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="Logo Organo"/>
        </section>
        <section>
            <p>
                Desenvolvido por Natália Barros.
            </p>
        </section>
    </footer>)
}

export default Rodape;