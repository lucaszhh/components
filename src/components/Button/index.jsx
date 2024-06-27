import styles from './button.module.css'

const Button = ({ children, onClick, className={}, disabled }) => {
    return (
        <button className={ `${className} ${styles.button}` } onClick={onClick} disabled={disabled} >
            {children}
        </button>
    );
};

export default Button;