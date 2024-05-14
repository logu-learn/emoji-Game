// Write your code here.

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojicard = () => {
    clickEmoji(id)
  }

  return (
    <li>
      <button type="button" onClick={onClickEmojicard}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
