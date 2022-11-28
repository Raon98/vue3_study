
import{useStore} from "vuex";
import{useRouter} from "vue-router";

export function cheol() {
    const store = useStore()
    const router = useRouter()

    return {store,
            router,
    }
}