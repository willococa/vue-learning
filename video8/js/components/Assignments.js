import AssignmentList from './AssignmentList.js'
export default {
    components: {
        'AssignmentList': AssignmentList
    },
    template:  `
        <section class="space-y-6">
            <AssignmentList :assignments="filters.inProgress" title="In Progress"/>
            <AssignmentList :assignments="filters.completed" title="Completed"/>
            <form @submit.prevent="add" class="add">
                <div class="border border-gray-600 text-black">
                    <input v-model="newAssignment" type="text" placeholder="New Assignment" class="p-2"/>
                    <button type="submit" class="bg-white p-2 border-l">Add</button>
                </div>
            </form>
        </section>
    `, 
    data(){
        return {
            assignments: [
                {name: 'Finish Project', completed: false, id: 1},
                {name: 'Read Atomic Habits book', completed: false, id: 2},
                {name: 'Continue JS Course', completed: false, id: 3}
            ],
            newAssignment: ''
        
        }
    },
    computed:{
        filters(){
            return {
                inProgress: this.assignments.filter(a=>  !a.completed),
                completed: this.assignments.filter(a=>  a.completed)
            }
        }
    },
    methods: {
        add(){
            this.assignments.push({
                name: this.newAssignment,
                completed: false,
                id: this.assignments.length + 1
            })
            this.newAssignment = ''
        }
    },
}