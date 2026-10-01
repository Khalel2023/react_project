import { useNavigate } from 'react-router-dom';

const About = () =>
    {
        const navigate = useNavigate();
        
        return(

        <div>
            <h1>Hello there bots</h1>
            <button onClick={() => {navigate('/')}}>
                Click to switch to main
            </button>
        </div>

        )
    }

export default About;