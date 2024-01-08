import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">MakeNotes</span></h1>
            </header>
            <main className="public__main">
                <p>Thank you for using MakeNotes, a web application that does excatly what the windows notes widget does.</p>
                <address className="public__addr">
                    MakeNotes<br />
                    14b, McKeon St, Redcliffe<br />
                    Perth, WA<br />
                    <a href="tel:+61411803301">0411 803 301</a>
                </address>
                <br />
                <p>Keith Galway</p>
            </main>
            <footer>
                <Link to="/login">Staff Login</Link>
            </footer>
        </section>
    )
    return content
}

export default Public