import { useNavigate } from 'react-router-dom';
export const withFormHandling = (WrappedComponent) => {
    return (props) => {
        const navigate = useNavigate();

        //reusable button click handler
        const handleButtonClick = () => {
            navigate('/'); 
        };

        // Pass the button click handler to the wrapped component
        return <WrappedComponent {...props} onButtonClick={handleButtonClick} />;
    };
};