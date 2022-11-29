import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {inject} from "vue";

export function cheol() {
    const store = useStore()
    const router = useRouter()

    return {
        $api: inject("$api"),
        store,
        router,
    }
}