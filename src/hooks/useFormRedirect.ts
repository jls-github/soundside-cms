import {useHistory} from 'react-router-dom'

interface useFormRedirectData {
    onSuccessRedirect: Function;
    onFailureRedirect: Function;
}

export default function useFormRedirect(): useFormRedirectData {
    const history = useHistory();

    function onSuccessRedirect(json: any) {
        history.push({pathname: "/forms/form-success", state: json})
    }

    function onFailureRedirect() {
        history.push('/forms/form-failure')
    }

    return {onSuccessRedirect, onFailureRedirect}
}