<template>
    <div id="app">
        <h1>Page likes: {{ totalLikes }}</h1>
        <section>
            <h2>Do you like this page?</h2>
            <div class="buttons">
                <button @click="onLike">Yes</button>
                <button @click="onSuperLike">Hell Yeah</button>
            </div>
        </section>
    </div>
</template>

<script>
import firebase from 'firebase/app';

export default {
    name: 'app',
    components: {},
    data: function() {
        return {
            unsubscribe: null,
            totalLikes: 0
        };
    },
    created() {
        this.unsubscribe = firebase
            .firestore()
            .collection('pages')
            .doc('vHQrpdbkicSkAygT0ocg')
            .onSnapshot((doc) => {
                const data = doc.data();
                this.totalLikes = data.totalLikes;
            });
    },
    methods: {
        onLike() {
            firebase
                .firestore()
                .collection('pages')
                .doc('vHQrpdbkicSkAygT0ocg')
                .update({
                    likes: firebase.firestore.FieldValue.increment(1)
                });
        },
        onSuperLike() {
            firebase
                .firestore()
                .collection('pages')
                .doc('vHQrpdbkicSkAygT0ocg')
                .update({
                    superLikes: firebase.firestore.FieldValue.increment(1)
                });
        }
    }
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.buttons button {
    margin: 10px;
    width: 150px;
}
</style>
