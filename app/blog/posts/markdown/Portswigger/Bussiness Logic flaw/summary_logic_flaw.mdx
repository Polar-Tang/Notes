https://portswigger.net/web-security/logic-flaws#what-are-business-logic-vulnerabilities
--------
### Disclaimer

Logical flaws often require persistence to uncover because they don’t reveal themselves easily. Test scenarios patiently and analyze the entire application thoroughly.

------
*Business logic in an application refers to the underlying rules and processes that govern how the application operates based on its intended purpose.* it's not merely related to bussiness, it may also be called: "application logic vulnerabilities" or simply "logic flaws".

Business logic flaw are implementation of an application that allow an attacker to alicit unintended behavior. This flaws are indeed input or altering of certains functionalities that the application web wasn't expecting, the main cause is that the developers doesn't expect the user to do such unpredictable actions.. This vulnerability is different, even every case could be unique and require deep understanding of the intended workflow so usually it's something really difficult to detect and that's because it's a great target for bug hunters.
So bussiness logic flaw vulnerabiltyies are basically an unexpected measures on the app, for **example**: *if an e-commerce platform doesn’t verify payment completion before processing an order, an attacker could exploit this gap to “purchase” items without payment.*
**More examples of Business Logic Vulnerabilities**

- **Skipping Workflow Steps**: For instance, if an application allows for an "add to cart" action without confirming payment, attackers might avoid payment steps entirely.
- **Unauthorized Modifications**: Lack of checks on critical parameters might let attackers modify prices, discounts, or quantities in an online store.
- **Nonsensical Input Handling**: Poor validation might allow nonsensical inputs that lead to undesired behavior, like setting negative prices, which might affect inventory, reporting, or financial systems.

The applications might be different, either by it been developed for other programer or whatever. Some part from the applications are robust, but If business rules and security measures are not applied consistently throughout the application, this can lead to potentially dangerous loopholes that may be exploited by an attacker. As the [[lab-logic-flaws-inconsistent-security-controls]]

Developers may avoid to check wheter an email is sent as an email on an [[POST_Method]], or even if it's sent, but always you may check [[GET_Method]] method because the browser check this already. But by a proxy that mandatory fields can be avoided, so **you try**:
- Only remove one parameter at a time to ensure all relevant code paths are reached.
- Try deleting the name of the parameter as well as the value. The server will typically handle both cases differently.
- Follow multi-stage processes through to completion. Sometimes tampering with a parameter in one step will have an effect on another step further along in the workflow.

#### Workflows
Many developer assume that the user will interact with the application only by using the ui interface, [[lab-2fa-broken-logic]]. Many times some function is built to work in certain order, but by intercepting the traffic we can alter that order, [[lab-logic-flaws-insufficient-workflow-validation]]. Check what the request do isolated, use its cookie: [[lab-logic-flaws-authentication-bypass-via-flawed-state-machine]].
####
You should pay particular attention to any situation where prices or other sensitive values are adjusted based on criteria determined by user actions. For example an application which applies 10% discounts to a buy over 1000 but is not checking if we decreased the amount after reach that sum.  Try to understand the criteria from the developers and applied adjustments do not correspond to the original criteria intended by the developers.
- What are the goals of an attacker? 
- Who an attacker could achive this goals with the provided functionallity

In fact the logic flaw vulnerabillities will require an to understand the application’s expected flows.  Hopefully, vulnerabilities reveal themselves only when different features interact, by here i important features that might you allow to detect this vulnerability.
**Identify Critical Flows**: Start by mapping out the critical flows of the application, like registration, login, profile update, payment, and transaction history. Take a look:

- Always pay attention on verbose error (if a field allows special characters in one place but rejects them in another, that inconsistency might signal a vulnerability) 
- Send unexpected payloads, [[lab-logic-flaws-excessive-trust-in-client-side-controls]]. [[lab-logic-flaws-high-level]], [[lab-logic-flaws-low-level]], try [[Injection]] in general
- Test what each step do, (like all of those request triggered by only one event)
- What could go wrong if any step is altered or skipped?
- Keep notes on each feature and endpoint. This way, you’ll remember all potential avenues for attack
- If certain parameters are used across different functions, like `email` in both registration and update flows, test them in all flows for discrepancies. [[lab-logic-flaws-inconsistent-security-controls]]
- If I can’t register an email with `@dontwannacry` in registration, does this restriction also apply to updates? Could I inject the restricted value through another method?
- Always ask whether you’re authorized to perform each action. If you can register an account, does updating your data enforce the same controls? (like [[Broken_authorization]] in some Portswigger labs)
- You could intercept every request and analyze it to see if there are hidden parameters or ones that could be tampered with
- COmpare different response by changing certain paramters, values, url fragmes, like [[lab-password-reset-broken-logic]]
