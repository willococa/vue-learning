import AssignmentList from './AssignmentList.js'
export default {
    components: {
        'AssignmentList': AssignmentList
    },
    template:  `
        <section class="space-y-6">
            <AssignmentList :assignments="filters.inProgress" title="In Progress"/>
            <AssignmentList :assignments="filters.completed" title="Completed"/>
        </section>
    `, 
    data(){
        return {
            assignments: [
                {name: 'Finish Project', completed: false, id: 1},
                {name: 'Read Atomic Habits book', completed: false, id: 2},
                {name: 'Continue JS Course', completed: false, id: 3}
            ]
        }
    },
    computed:{
        filters(){
            return {
                inProgress: this.assignments.filter(a=>  !a.completed),
                completed: this.assignments.filter(a=>  a.completed)
            }
        }
    }
}