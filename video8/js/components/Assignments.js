import AssignmentList from './AssignmentList.js'
import AssingmentCreate from './AssignmentCreate.js'


export default {
    components: {
        AssignmentList,
       AssingmentCreate
   },
    template:  `
        <section class="space-y-6">
            <AssignmentList :assignments="filters.inProgress" title="In Progress"/>
            <AssignmentList :assignments="filters.completed" title="Completed"/>
            <AssingmentCreate @add="add"/>
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
        add(name){
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1
            })
        }
    },
}