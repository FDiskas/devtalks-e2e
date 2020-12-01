import { ClientFunction, Selector } from "testcafe";
import { ReactSelector, waitForReact } from "testcafe-react-selectors";

fixture`App tests`.page(`http://localhost:3000`).beforeEach(async (t) => {
	await waitForReact();
	await t.resizeWindow(800, 600);
});

test("Locate Bob details", async (t) => {
	const el = ReactSelector("ListDetail");
	const link = ReactSelector("Link");

	await t.click(link.withText("Users List")).click(link.withText("102: Bob"));

	await t
		.expect(el.getReact(({ props }) => props.item))
		.eql({ id: 102, name: "Bob" })
		.expect(Selector("h1").innerText)
		.eql("Detail for Bob");
});

test("footer link", async (t) => {
	const el = ReactSelector("footer Link");
	const getPageUrl = ClientFunction(() => window.location.href);

	await t.click(el);
	await t.expect(getPageUrl()).eql("http://localhost:3000/");
});

test("different browser size", async (t) => {
	await t
		.resizeWindowToFitDevice("iphonexr", {
			portraitOrientation: true,
		})
		.takeScreenshot();
});
