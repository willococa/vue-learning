
export default {
    template: `
        <div class="flex gap-2">
            <button  v-for="tag in tags" @click="$emit('update:modelValue', tag)"
                class="border px-2 py-1 rounded-md text-xs"
                :class="{
                    'text-blue-600 border-blue-600': modelValue === tag
                }" >
                    {{tag}}
            </button>
        </div>
    `,
    props:{
        initialTags: Array,
        modelValue: String
    },
    computed: {
        tags() {
            return new Set(['all',...this.initialTags]);
        }
    }
}