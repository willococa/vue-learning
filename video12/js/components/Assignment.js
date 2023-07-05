export default {
    template:`
        <li>             
            <label class="p-4 flex justify-between align-center" >
                {{assignment.name}}
                <input type="checkbox" v-model="assignment.completed" class="ml-3">
            </label>            
        </li>
    `,
    props:{assignment: Object}
}