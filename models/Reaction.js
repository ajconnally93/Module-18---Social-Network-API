// requires mongoose for MongoDB
const { Schema, Types } = require('mongoose');



const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
          },

          reactionBody: {
            type: String,
            required: true,
            maxlength: 260,
          },

          username: {
            type: String,
            required: true,
          },


// uses default date function from JS
          createdAt: {
            type: Date,
            default: Date.now,
          },
    },


    // may need tutoring about getters/setters
    {
        toJSON: {
            getters: true,
        },
        id: false,
      },
)



// export default? like with React
module.exports = reactionSchema;