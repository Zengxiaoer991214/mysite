<template>
    <div id="main">
        ???

    <mavoneditor v-model="value"/>
</div>
</template>



<script>

export default {
    // 注册
    components: {
        mavoneditor,
    },
    data() {
        return {
            content:'', // 输入的markdown
            html:'',    // 及时转的html
        }
    },
    methods: {
        // 所有操作都会被解析重新渲染
        change(value, render){
            // render 为 markdown 解析后的结果[html]
            this.html = render;
        },
        // 提交
        submit(){
            console.log(this.content);
            console.log(this.html);
        }
    },
    mounted() {

    }
}
</script>