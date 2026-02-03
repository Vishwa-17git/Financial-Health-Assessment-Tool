from openai import OpenAI
from config import OPENAI_API_KEY, ENABLE_AI

# Create client only if AI is enabled and a real key is provided
client = None
if ENABLE_AI and OPENAI_API_KEY and "your" not in OPENAI_API_KEY.lower():
    client = OpenAI(api_key=OPENAI_API_KEY)


def ai_advice(metrics, score, industry):
    """Return AI-generated advice, but gracefully handle missing/invalid API keys or errors.

    AI will be disabled if ENABLE_AI is false or OPENAI_API_KEY is not set. In either case,
    a helpful placeholder message is returned so the backend remains usable in development.
    """

    prompt = f"""
You are a financial advisor for small businesses.

Industry: {industry}
Revenue: ₹{metrics['revenue']}
Expenses: ₹{metrics['expenses']}
Profit Margin: {metrics['profit_margin']}%
Cash Flow: {metrics['cash_flow']}
Health Score: {score}/100

Explain financial health in simple language.
Identify risks.
Suggest cost optimization.
Recommend suitable loan or NBFC product.
Give summary for non-finance owner.
"""

    if not ENABLE_AI:
        return (
            "AI insights are disabled (ENABLE_AI=false). Set ENABLE_AI=true in backend/.env to enable AI advice."
        )

    if not client:
        return (
            "AI insights are currently unavailable because OPENAI_API_KEY is not set or is a placeholder. "
            "Set a valid OpenAI API key in backend/.env to enable AI advice."
        )

    try:
        response = client.chat.completions.create(
            model="gpt-5",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.4,
        )
        return response.choices[0].message.content

    except Exception:
        # Don't let OpenAI failures crash the API; return a user-friendly message instead
        return (
            "AI advice could not be generated due to an error (see server logs). "
            "Please try again later or verify your OPENAI_API_KEY and ENABLE_AI settings."
        )

