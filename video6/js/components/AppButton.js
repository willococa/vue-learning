export default{
    template: `
    <button 
        :class="{
            'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
            'bg-blue-500 hover:bg-blue-600 text-white': type === 'primary',
            'bg-gray-500 hover:bg-gray-600 text-white': type === 'secondary',
            'bg-red-500 hover:bg-red-600 text-white': type === 'danger',
            'bg-green-500 hover:bg-green-600 text-white': type === 'success',
            'bg-yellow-500 hover:bg-yellow-600 text-white': type === 'warning',
            'bg-indigo-500 hover:bg-indigo-600 text-white': type === 'info',
            'is-loading': processing
        }"
        :disabled="processing"
    >
        <slot/>    
    </button>
    `,
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        processing: {
            type: Boolean,
            default: false
        }
    }
}