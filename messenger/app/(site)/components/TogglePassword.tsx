import { IconType } from 'react-icons';

interface AuthSocialButtonProps {
    icon: IconType,
    onClick: () => void;
}

const TogglePassword: React.FC<AuthSocialButtonProps> = ({
    icon: Icon,
    onClick
}) => {
    return (
        <button 
            type="button"
            onClick={onClick}
            className="inline-flex w-7 h-7 align-middle justify-center rounded-full bg-white px-2 py-2 shadow-sm ring-gray-300 transition-colors hover:bg-gray-200 focus:outline-offset-2"
        >
            <Icon />
        </button>
    );
}

export default TogglePassword;