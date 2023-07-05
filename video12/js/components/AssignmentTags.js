
export default {
    template: `
        <div class="flex gap-2">
            <button  v-for="tag in tags" @click="$emit('selected', tag)"
                class="border px-2 py-1 rounded-md text-xs"
                :class="{
                    'text-blue-600 border-blue-600': currentTag === tag
                }" >
                    {{tag}}
            </button>
        </div>
    `,
    props:{
        initialTags: Array,
        currentTag: String
    },
    computed: {
        tags() {
            return new Set(['all',...this.initialTags]);
        }
    }
}