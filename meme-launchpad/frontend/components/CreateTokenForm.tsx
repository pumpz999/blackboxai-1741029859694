// Animated Token Creation Form
import { motion } from 'framer-motion';
import { EmojiPicker } from 'emoji-mart';

const CreateTokenForm = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h1 className="text-4xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
      Create Your Meme Token 🚀
    </h1>
    <EmojiPicker onSelect={(emoji) => setTokenEmoji(emoji.native)} />
  </motion.div>
);

export default CreateTokenForm;
