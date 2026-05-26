"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const addDiet = () => {};

const Dashboard = () => {
  return (
    <div className="px-6 py-2">
      <h2 className="text-2xl mb-2">Add diet</h2>
      <form action="POST">
        <label htmlFor="diet-name">
          <div className="flex flex-col">
            <span>Enter diet name:</span>
            <Input
              type="text"
              name="diet-name"
              id="diet-name"
              className="border border-slate-700 w-50 my-2"
            />
          </div>
        </label>

        <label htmlFor="diet-price">
          <div className="flex flex-col">
            <span>Enter diet price:</span>
            <Input
              type="number"
              name="diet-price"
              id="diet-price"
              className="border border-slate-700 w-50 my-2"
            />
          </div>
        </label>

        <Button
          className="cursor-pointer mt-4"
          type="submit"
          onClick={() => addDiet}
        >
          Add diet
        </Button>
      </form>
    </div>
  );
};

export default Dashboard;
