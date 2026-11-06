# /// script
# requires-python = ">=3.9"
# dependencies = ["qrcode[pil]"]
# ///
"""Turn a URL into qr.png.

Usage (uv installs the dependency automatically):
    uv run scripts/make_qr.py https://<username>.github.io/china-dx-pricing/
"""
import sys

import qrcode


def main() -> None:
    if len(sys.argv) != 2:
        sys.exit("Usage: uv run scripts/make_qr.py <URL>")
    url = sys.argv[1]
    qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, box_size=12, border=4)
    qr.add_data(url)
    qr.make(fit=True)
    qr.make_image(fill_color="black", back_color="white").save("qr.png")
    print(f"Saved qr.png for {url}")


if __name__ == "__main__":
    main()
