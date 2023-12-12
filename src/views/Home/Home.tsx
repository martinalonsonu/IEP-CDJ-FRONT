import { Button } from "@chakra-ui/react"
import { CustomToast } from "../../components/CustomToast"

const Home = () => {
    const toast = () => {
        CustomToast("info", "ejemplo de mensaje")
    }
    return (
        <div>
            <Button onClick={toast}>TOASTTTT</Button>
            <div>QUE FUEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</div>
        </div>
    )
}

export default Home