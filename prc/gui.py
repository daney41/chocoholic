import tkinter as tk
window = tk.Tk()

frame = tk.Frame(window, bg="red")
frame.pack(side=tk.LEFT)

frame1 = tk.Frame(frame, bg="yellow")
frame1.pack(side=tk.LEFT)
btm_1 = tk.Button(frame1, text = "Button1")
btm_1.pack(pady=20)

frame2 = tk.Frame(frame, bg="green")
frame2.pack()
btm_2 = tk.Button(frame2, text = "Button2")
btm_2.pack(ipadx=20,)

frame.mainloop()