import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Foo from '@/components/foo/index.vue'
import FooChild1 from '@/components/foo/child1.vue'
import FooChild2 from '@/components/foo/child2.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/foo',
            component: Foo,
            children: [{
                path: 'child1',
                component: FooChild1
            }, {
                path: 'child2',
                component: FooChild2
            }, {
                path: '',
                component: FooChild2
            }]
        }
    ]
})