import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const pageUpdate = functions.firestore.document( 'pages/{pageId}' ).onUpdate( ( change ) => {
    const data = change.after.data();
    const prevData = change.before.data();

    if ( data && prevData ) {
        if ( data.totalLikes !== prevData.totalLikes ) {
            return null;
        }

        const isSuperLike = data.likes === prevData.likes;
        return change.after.ref.update( {
            totalLikes: admin.firestore.FieldValue.increment( isSuperLike ? 2 : 1 )
        } );
    }

    return null;
} );

