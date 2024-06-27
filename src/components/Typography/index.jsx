import styles from "./typography.module.css"

const Typography = ({ tag: Tag, className = {}, children, ...props }) => {
    return (<Tag className={`${styles[Tag]} ${className}` } {...props}>{children}</Tag>)
}

export default Typography