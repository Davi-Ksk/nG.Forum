import { Container } from "./styles";

export	function Input({ icon: Icon,title, ...rest }){
    return(
        <Container {...rest}>
            <label>{title}</label>

            <div className="input-field">
                {Icon && <Icon size={20} />}
                <input {...rest} />
            </div>

        </Container>

    )
}