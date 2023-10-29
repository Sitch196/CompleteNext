import { connectToDB } from "@/utils/database";
import Prompt from "@/models/prompt";

export const POST = async (req, res) => {
  const { userId, prompt, tag } = await req.json();

  try {
    await connectToDB();
    const newPrompt = new Prompt({
      creator: userId,
      tag,
      prompt,
    });
    await newPrompt.save();

    // Now, fetch the newly created prompt with the populated creator field
    const createdPrompt = await Prompt.findById(newPrompt._id).populate(
      "creator"
    );

    return new Response(JSON.stringify(createdPrompt, { status: 201 }));
  } catch (err) {
    return new Response("Something is wrong with the prompt!!");
  }
};
