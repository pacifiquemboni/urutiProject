import Button from "@/components/button";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <section className="flex min-h-screen items-center justify-center">
        <div className="min-h-full flex flex-col gap-4 justify-center items-center">
          <section className="text-center uppercase">
            <p>Oops, member Not found</p>
            <h1 className="text-9xl">404</h1>

            <p>
              We are sorry, but the member you're
              <br /> looking for is not found
            </p>
          </section>
          <Link to="/">
            <Button size="xsm" className="!bg-red-500 !text-white !px-10 !py-3 !rounded-2xl">
              Back to home page
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
