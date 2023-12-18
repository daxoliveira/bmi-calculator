export default function ImperialForm() {
  return (
    <form>
      <label>
        Height
        <br />
        <input type="text" name="feet" placeholder="5 ft" defaultValue='5' />
        <input type="text" name="inches" placeholder="11 in" defaultValue='11' />
      </label>
      <br />
      <label>
        Weight
        <br />
        <input type="text" name="stones" placeholder="11 st" defaultValue="11" />
        <input type="text" name="pounds" placeholder="4 lbs" defaultValue="4" />
      </label>
    </form>
  )
}