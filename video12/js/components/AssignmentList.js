import Assignment from "./Assignment.js";
import Tags from "./AssignmentTags.js";
export default {
    data() {
        return {
            currentTag: 'all'
        
        }
    },
    components: {
     Assignment, Tags
    },
    template: ` 
        <div v-show="filteredAssignments.length" class="assignment-card"> 
            <Tags 
                :initialTags="assignments.map(a=>a.tag)" 
                @selected="currentTag = $event;" 
                :currentTag="currentTag"/>   
            <section >
                <h2 class="font-bold mb-2">{{title }}({{filteredAssignments.length}})</h2>
                <ul class="border border-gray-600 divide-y divide-gray-600">
                    <Assignment v-for="assignment in filteredAssignments" :key="assignment.id" :assignment="assignment"/>
                </ul>  
            </section> 
        </div>
    `,
    props: {
        assignments: Array,
        title: String
    },
    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            }
            return this.assignments.filter(assignment => assignment.tag === this.currentTag);
        }
    }
}
