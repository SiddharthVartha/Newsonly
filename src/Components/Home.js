import RocketMan from '../Rocket-Man.svg';
import NewsHome from '../news-smartphone.jpg'
function Home(props) {
    return (<>
        <section>
            <div className='container_fluid nav-bg'>
                <div className='row'>
                    <div className="col-10 mx-auto">
                        <div className='row'>
                            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>

                                <h1>NewsOnly only show top news cause,Time Saving is our First Priority</h1>

                                <h2 className='my-3'> Category based news providers</h2>

                            </div>


                            <div className='col-lg-6 order-1 order-lg-2 image'>
                                <br />
                                <br />
                                <br />
                                <img src={RocketMan} className="image-fluid animated1" alt="home img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-10 mx-auto">
                        <div className='row'>
                            <div className='col-lg-6 order-1 order-lg-1 image'>
                                <br />
                                <br />
                                <br />
                                <img src={NewsHome} className="image-fluid animated2" alt="home img" />
                            </div>
                            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>

                                <h1>Advantages of NewsOnly</h1>
                                <ol className='my-3'>
                                    <li className='h3'>Much more immediate and up to date</li>
                                    <li className='h3'>Always have access ie Mobile Phone</li>
                                    <li className='h3'>Free</li>
                                    <li className='h3'>Can include wider content</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                <div className="col-10 mx-auto">
                    <div className='row my-3'>
                        <h1 className='text-center h1'>Quote</h1>
                    </div>
                    <div className='row my-3'>
                        <h4>Live news teaches you some incredibly strong lessons: that every day is a new day, and it's never too late to fix something.<span className='badge text-warning mx-5'>--Nancy Dubuc</span></h4>
                    </div>
                </div>
            </div>
            </div>
        </section>
    </>);
}

export default Home;